import { faStar, faStarHalfAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function FeedBackList() {
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
        <>
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 font-medium text-sm text-blue-600 border-b-2 border-blue-600`}
                >
                    All Feedback
                </button>

            </div>

            <div className="space-y-6">
                {feedback.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        No feedback found matching your criteria
                    </div>
                ) : (
                    feedback.map((item) => (
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
        </>
    )
}

export default FeedBackList
