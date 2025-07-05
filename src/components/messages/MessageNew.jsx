import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function MessageNew({ onCancel, onSend }) {
        const navigate = useNavigate()
    
  const [message, setMessage] = useState({
    subject: '',
    recipient: '',
    body: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage(prev => ({ ...prev, [name]: value }));
  };

  const handleAttachment = (e) => {
    setMessage(prev => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.subject && message.body) {
      onSend(message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">New Message</h2>
        
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Recipient Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              name="recipient"
              value={message.recipient}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Support Team"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">Messages are sent to our support team</p>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
            <input
              type="text"
              name="subject"
              value={message.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="What's this about?"
              required
            />
          </div>

          {/* Message Body */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
            <textarea
              name="body"
              value={message.body}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Describe your issue or question in detail..."
              required
            />
          </div>

          {/* Attachment */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Attachment</label>
            <div className="flex items-center">
              <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium text-gray-700">
                <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                Add File
                <input
                  type="file"
                  onChange={handleAttachment}
                  className="hidden"
                />
              </label>
              {message.attachment && (
                <span className="ml-3 text-sm text-gray-600">
                  {message.attachment.name}
                </span>
              )}
            </div>
          </div> */}
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={()=>navigate('/home/messages')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!message.subject || !message.body}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:cursor-not-allowed flex items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageNew;