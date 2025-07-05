import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MessageList from './MessageList'
import MessageNew from './MessageNew'
import MessageThread from './MessageThread'
import { Outlet } from 'react-router-dom'

function MainMessage() {
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faMessage} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">Messages</span>
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainMessage
