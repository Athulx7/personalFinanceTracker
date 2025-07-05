import { faPaperPlane, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function AddFeedBack() {
    const [newFeedback, setNewFeedback] = useState({
        rating: 0,
        comment: '',
        isSubmitting: false
    });
    const handleRatingChange = (rating) => {
        setNewFeedback({ ...newFeedback, rating });
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />
                    Share Your Feedback
                </h2>

                <form onSubmit={''}>
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
                            onChange={''}
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
        </>
    )
}

export default AddFeedBack
