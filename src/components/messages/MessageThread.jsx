import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faPaperPlane, 
  faPaperclip,
  faEnvelope,
  faEnvelopeOpen,
  faUser,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function MessageThread({ message, onBack, onReply }) {
    const navigate = useNavigate()
  const [replyText, setReplyText] = useState('');
  const [attachment, setAttachment] = useState(null);

  // Sample message data (would normally come from props)
  const messageData = message || {
    id: 1,
    subject: 'Account Verification Issue',
    status: 'open',
    date: '2023-05-15T10:30:00',
    sender: 'Support Team',
    thread: [
      {
        id: 1,
        sender: 'You',
        senderType: 'user',
        date: '2023-05-15T10:30:00',
        text: 'I cannot verify my email address. The verification link seems to be expired.',
        unread: false
      },
      {
        id: 2,
        sender: 'Support Team',
        senderType: 'support',
        date: '2023-05-15T11:45:00',
        text: 'We have resent the verification link to your email. Please check your inbox and spam folder. The link will be valid for 24 hours.',
        unread: false
      },
      {
        id: 3,
        sender: 'Support Team',
        senderType: 'system',
        date: '2023-05-15T11:46:00',
        text: 'Ticket status changed to "In Progress"',
        unread: true
      }
    ]
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      onReply({
        messageId: messageData.id,
        text: replyText,
        attachment
      });
      setReplyText('');
      setAttachment(null);
    }
  };

  const handleAttachment = (e) => {
    setAttachment(e.target.files[0]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Message Header */}
      <div className="border-b border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <button 
            onClick={()=>navigate('/home/messages')}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Inbox
          </button>
          <span className={`px-3 py-1 text-xs rounded-full ${
            messageData.status === 'open' 
              ? 'bg-orange-100 text-orange-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {messageData.status === 'open' ? 'Open' : 'Closed'}
          </span>
        </div>
        <h2 className="text-xl font-bold mt-2 text-gray-800">
          {messageData.subject}
        </h2>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <FontAwesomeIcon 
            icon={messageData.thread.some(m => m.unread) ? faEnvelope : faEnvelopeOpen} 
            className="mr-2" 
          />
          Started by {messageData.sender} • {new Date(messageData.date).toLocaleString()}
        </div>
      </div>

      {/* Message Thread */}
      <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
        {messageData.thread.map((msg) => (
          <div 
            key={msg.id}
            className={`p-4 rounded-lg ${
              msg.senderType === 'user' 
                ? 'bg-blue-50 ml-8' 
                : msg.senderType === 'support' 
                  ? 'bg-gray-50 mr-8' 
                  : 'bg-yellow-50 mr-8'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={msg.senderType === 'user' ? faUser : 
                        msg.senderType === 'support' ? faHeadset : faEnvelope}
                  className={`mr-2 ${
                    msg.senderType === 'user' ? 'text-blue-500' : 
                    msg.senderType === 'support' ? 'text-gray-500' : 'text-yellow-500'
                  }`}
                />
                <span className="font-medium">{msg.sender}</span>
                {msg.unread && (
                  <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                    New
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {new Date(msg.date).toLocaleString()}
              </span>
            </div>
            <p className="text-gray-800 whitespace-pre-line">{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Reply Area */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Reply
          </label>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your reply here..."
          />
        </div>
        
        <div className="flex justify-end items-center">
          {/* <div>
            <input
              type="file"
              id="message-attachment"
              onChange={handleAttachment}
              className="hidden"
            />
            <label
              htmlFor="message-attachment"
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
              Attach File
            </label>
            {attachment && (
              <span className="ml-2 text-sm text-gray-600">
                {attachment.name}
              </span>
            )}
          </div> */}
          
          <button
            onClick={handleSendReply}
            disabled={!replyText.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer disabled:cursor-not-allowed flex items-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageThread;