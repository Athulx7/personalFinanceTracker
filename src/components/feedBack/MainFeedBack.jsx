import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddFeedBack from './AddFeedBack'
import FeedBackList from './FeedBackList'

function MainFeedBack() {
  return (
    <>
        <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faComment} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">feedback</span>
                </div>

                <div>
                    <AddFeedBack />
                </div>
                <div>
                    <FeedBackList />
                </div>
            </div>
    </>
  )
}

export default MainFeedBack
