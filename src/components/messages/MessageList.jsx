import { faPlus, faEnvelope, faEnvelopeOpen, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CommonTable from '../../basicComponents/commonTable'
import { useNavigate } from 'react-router-dom'

function MessageList() {
    const navigate = useNavigate()
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            subject: 'Account Verification Required', 
            status: 'Open', 
            date: '2023-05-15',
            sender: 'Support Team',
            unread: true,
            statusDisplay: (
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="mr-2 text-blue-500" 
                />
                <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                  Open
                </span>
              </div>
            ),
            action: (
              <button onClick={()=> navigate('1')} className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faEye} className="mr-1" />
                View
              </button>
            )
        },
        { 
            id: 2, 
            subject: 'Your Recent Transaction', 
            status: 'Closed', 
            date: '2023-05-10',
            sender: 'System',
            unread: false,
            statusDisplay: (
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faEnvelopeOpen} 
                  className="mr-2 text-gray-500" 
                />
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  Closed
                </span>
              </div>
            ),
            action: (
              <button onClick={()=> navigate('2')} className="text-blue-600 cursor-pointer hover:text-blue-800 flex items-center">
                <FontAwesomeIcon icon={faEye} className="mr-1" />
                View
              </button>
            )
        },
       
    ])

    const columns = [
        { header: 'Status', accessor: 'statusDisplay' },
        { header: 'Subject', accessor: 'subject' },
        { header: 'From', accessor: 'sender' },
        { header: 'Date', accessor: 'date' },
        { header: 'Action', accessor: 'action' },
    ]

    return (
        <div className="p-4">
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Your Messages</h1>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate('new')}
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    New Message
                </button>
            </div>

            <CommonTable
                columns={columns}
                data={messages}
            />
        </div>
    )
}

export default MessageList