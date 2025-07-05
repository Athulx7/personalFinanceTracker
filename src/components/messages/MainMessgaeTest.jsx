import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInbox,
  faEnvelope,
  faEnvelopeOpen,
  faReply,
  faPaperPlane,
  faTimes,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

function MainMessageTest() {
  // Sample message data
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      subject: 'Account Verification Issue', 
      status: 'open', 
      date: '2023-05-15', 
      sender: 'Support Team',
      thread: [
        { sender: 'You', date: '2023-05-15 10:30', text: 'I cannot verify my email address' },
        { sender: 'Support Team', date: '2023-05-15 11:45', text: 'We have resent the verification link' }
      ] 
    },
    { 
      id: 2, 
      subject: 'Transaction Failed', 
      status: 'closed', 
      date: '2023-05-10', 
      sender: 'System',
      thread: [
        { sender: 'System', date: '2023-05-10 14:20', text: 'Your transaction #12345 failed' },
        { sender: 'You', date: '2023-05-10 15:10', text: 'Why did this transaction fail?' },
        { sender: 'Support Team', date: '2023-05-10 16:30', text: 'This was due to insufficient funds' }
      ] 
    },
    { 
      id: 3, 
      subject: 'New Feature Announcement', 
      status: 'open', 
      date: '2023-05-05', 
      sender: 'Product Team',
      thread: [
        { sender: 'Product Team', date: '2023-05-05 09:00', text: 'We have launched budget tracking!' }
      ] 
    }
  ]);

  const [activeView, setActiveView] = useState('inbox'); // 'inbox', 'thread', 'new'
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState({
    subject: '',
    body: ''
  });
  const [replyText, setReplyText] = useState('');

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setActiveView('thread');
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    
    const updatedMessages = messages.map(msg => {
      if (msg.id === selectedMessage.id) {
        return {
          ...msg,
          thread: [
            ...msg.thread,
            { sender: 'You', date: new Date().toISOString(), text: replyText }
          ],
          status: 'open'
        };
      }
      return msg;
    });
    
    setMessages(updatedMessages);
    setSelectedMessage(updatedMessages.find(msg => msg.id === selectedMessage.id));
    setReplyText('');
  };

  const handleSendNewMessage = () => {
    if (!newMessage.subject.trim() || !newMessage.body.trim()) return;
    
    const newMsg = {
      id: messages.length + 1,
      subject: newMessage.subject,
      status: 'open',
      date: new Date().toISOString().split('T')[0],
      sender: 'You',
      thread: [
        { sender: 'You', date: new Date().toISOString(), text: newMessage.body }
      ]
    };
    
    setMessages([newMsg, ...messages]);
    setNewMessage({ subject: '', body: '' });
    setActiveView('inbox');
  };

  return (
    <div className="p-4 md:p-6">
      <div className="font-semibold text-xl md:text-2xl text-gray-800 mb-6">
        <FontAwesomeIcon icon={faInbox} className="mr-2 text-blue-500" />
        Messages
      </div>

      {activeView === 'inbox' && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Your Messages</h3>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
              onClick={() => setActiveView('new')}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              New Message
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {messages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {message.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {message.sender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(message.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${message.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {message.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => handleViewMessage(message)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeView === 'thread' && selectedMessage && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-medium">{selectedMessage.subject}</h3>
              <p className="text-sm text-gray-500">
                From: {selectedMessage.sender} • {new Date(selectedMessage.date).toLocaleDateString()}
              </p>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setActiveView('inbox')}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {selectedMessage.thread.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${item.sender === 'You' ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.sender}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Reply</label>
              <textarea
                className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply here..."
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
              onClick={handleSendReply}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Reply
            </button>
          </div>
        </div>
      )}

      {activeView === 'new' && (
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-medium">New Message</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setActiveView('inbox')}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={newMessage.subject}
                onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="6"
                value={newMessage.body}
                onChange={(e) => setNewMessage({...newMessage, body: e.target.value})}
                placeholder="Type your message here..."
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => setActiveView('inbox')}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              onClick={handleSendNewMessage}
              disabled={!newMessage.subject.trim() || !newMessage.body.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainMessageTest;