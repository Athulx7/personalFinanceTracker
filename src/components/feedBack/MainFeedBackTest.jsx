import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faPaperPlane,
  faEdit,
  faTrash,
  faUser,
  faComments,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

function MainFeedBackTest() {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      user: 'Priya Sharma',
      rating: 4.5,
      comment: 'The expense tracking feature is excellent, but I wish the reports had more customization options.',
      date: '2023-05-15',
      isAdmin: false
    },
    {
      id: 2,
      user: 'Admin',
      rating: 5,
      comment: 'Thank you for your feedback! We are working on enhanced reporting features for the next update.',
      date: '2023-05-16',
      isAdmin: true
    },
    {
      id: 3,
      user: 'Rahul Patel',
      rating: 3,
      comment: 'Good basic features but sometimes the app crashes when adding multiple transactions quickly.',
      date: '2023-05-10',
      isAdmin: false
    }
  ]);

  const [newFeedback, setNewFeedback] = useState({
    rating: 0,
    comment: '',
    isSubmitting: false
  });

  const [activeTab, setActiveTab] = useState('all');
  const [isAdminView, setIsAdminView] = useState(false);

  const handleRatingChange = (rating) => {
    setNewFeedback({ ...newFeedback, rating });
  };

  const handleCommentChange = (e) => {
    setNewFeedback({ ...newFeedback, comment: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewFeedback({ ...newFeedback, isSubmitting: true });
    
    // Simulate API call
    setTimeout(() => {
      const newEntry = {
        id: feedback.length + 1,
        user: 'Current User',
        rating: newFeedback.rating,
        comment: newFeedback.comment,
        date: new Date().toISOString().split('T')[0],
        isAdmin: false
      };
      
      setFeedback([newEntry, ...feedback]);
      setNewFeedback({ rating: 0, comment: '', isSubmitting: false });
    }, 1000);
  };

  const handleAdminReply = (feedbackId) => {
    const replyText = prompt('Enter your admin reply:');
    if (replyText) {
      const newEntry = {
        id: feedback.length + 1,
        user: 'Admin',
        rating: 0,
        comment: replyText,
        date: new Date().toISOString().split('T')[0],
        isAdmin: true,
        replyTo: feedbackId
      };
      setFeedback([...feedback, newEntry]);
    }
  };

  const filteredFeedback = feedback.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'with-replies') return feedback.some(f => f.replyTo === item.id);
    if (activeTab === 'no-replies') return !feedback.some(f => f.replyTo === item.id);
    return true;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <FontAwesomeIcon icon={faComments} className="text-2xl text-blue-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Feedback & Support</h1>
        {isAdminView && (
          <button 
            onClick={() => setIsAdminView(false)}
            className="ml-auto text-sm bg-gray-200 px-3 py-1 rounded-md"
          >
            User View
          </button>
        )}
        {!isAdminView && (
          <button 
            onClick={() => setIsAdminView(true)}
            className="ml-auto text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md"
          >
            Admin View
          </button>
        )}
      </div>

      {/* Feedback Form */}
      {!isAdminView && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />
            Share Your Feedback
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="text-2xl focus:outline-none"
                  >
                    <FontAwesomeIcon 
                      icon={faStar} 
                      className={star <= newFeedback.rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
              <textarea
                value={newFeedback.comment}
                onChange={handleCommentChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="What do you like about our app? What can we improve?"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={newFeedback.isSubmitting || !newFeedback.comment || newFeedback.rating === 0}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                {newFeedback.isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feedback Filter Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          All Feedback
        </button>
        {isAdminView && (
          <>
            <button
              onClick={() => setActiveTab('with-replies')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'with-replies' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              With Replies
            </button>
            <button
              onClick={() => setActiveTab('no-replies')}
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'no-replies' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Needs Reply
            </button>
          </>
        )}
      </div>

      {/* Feedback List */}
      <div className="space-y-6">
        {filteredFeedback.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No feedback found matching your criteria
          </div>
        ) : (
          filteredFeedback.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl shadow-sm border ${item.isAdmin ? 'border-blue-200 bg-blue-50' : 'border-gray-200'} p-6`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.isAdmin ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    <FontAwesomeIcon icon={item.isAdmin ? faUser : faUser} />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{item.user}</h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                {!item.isAdmin && item.rating > 0 && (
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                )}
              </div>

              <div className="ml-13 pl-1">
                <p className="text-gray-800 mb-4">{item.comment}</p>
                
                {isAdminView && !item.isAdmin && (
                  <button
                    onClick={() => handleAdminReply(item.id)}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <FontAwesomeIcon icon={faEdit} className="mr-1" />
                    Reply as Admin
                  </button>
                )}

                {/* Show replies to this feedback */}
                {feedback.filter(f => f.replyTo === item.id).map(reply => (
                  <div key={reply.id} className="mt-4 pl-4 border-l-2 border-blue-200">
                    <div className="flex items-center mb-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} size="xs" />
                      </div>
                      <div className="ml-2">
                        <h4 className="text-sm font-medium">{reply.user}</h4>
                        <p className="text-xs text-gray-500">{reply.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm ml-10">{reply.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainFeedBackTest;