import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import UserDropDown from './UserDropDown'

function TopHeader() {
    return (
        <>
            <div className="flex items-center justify-between w-full h-full ps-2">
                <div className="flex ">
                    <Link to="/home" className="flex items-center text-lg">
                        <FontAwesomeIcon icon={faSackDollar} className="text-indigo-500 text-xl" />
                        <span className="font-bold ml-2">Personal Finance Tracker</span>
                    </Link>
                    <div className='w-1 border-r-2 border-r-gray-200 h-13 ml-2'></div>
                </div>

                <div className="flex-1 px-4">
                    <input
                        type="text"
                        placeholder="Search for everything..."
                        className="w-full max-w-md px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <div className="flex items-center">
                    <UserDropDown />
                </div>
            </div>
        </>
    )
}

export default TopHeader
