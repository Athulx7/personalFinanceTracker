import { faSackDollar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserDropDown from './UserDropDown'

function TopHeader() {
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    return (
        <div className="flex items-center justify-between w-full h-full px-2 md:px-2">

            <div className="flex items-center">
                <Link to="/home" className="flex items-center text-lg">
                    <FontAwesomeIcon icon={faSackDollar} className="text-indigo-500 text-xl" />
                    <span className="font-bold ml-2 hidden sm:inline">Personal Finance Tracker</span>
                    <span className="font-bold ml-2 sm:hidden">PFT</span>
                </Link>
                <div className='w-1 border-r-2 border-r-gray-200 h-13 ml-2 hidden md:block'></div>
            </div>

            <div className="flex-1 px-4 hidden md:block">
                <input
                    type="text"
                    placeholder="Search for everything..."
                    className="w-full max-w-md px-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>

            <button 
                className="md:hidden p-2 text-gray-500 hover:text-indigo-500"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>

            {showMobileSearch && (
                <div className="absolute top-14 left-0 right-0 bg-white p-2 shadow-md md:hidden z-40">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        autoFocus
                    />
                </div>
            )}

            <div className="flex items-center">
                <UserDropDown />
            </div>
        </div>
    )
}

export default TopHeader