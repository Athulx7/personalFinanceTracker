import { faBars, faBook, faCircleInfo, faCircleLeft, faComment, faGear, faMessage, faRightLeft, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SideHeader() {
    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="flex flex-col">
 
                <div className='px-4 py-3'>
                    <div className='font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2'>
                        Menu 
                    </div>
                    <nav className='space-y-1'>
                        <NavLink
                            to="/home"
                            end
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faBars} className="w-5 text-center" />
                            <span className="ms-3">Overview</span>
                        </NavLink>

                        <NavLink
                            to="/home/wallet"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faWallet} className="w-5 text-center" />
                            <span className="ms-3">My Wallet</span>
                        </NavLink>

                        <NavLink
                            to="/expenses"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center" />
                            <span className="ms-3">Activity - Expense</span>
                        </NavLink>

                        <NavLink
                            to="/income"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center" />
                            <span className="ms-3">Activity - Income</span>
                        </NavLink>

                        <NavLink
                            to="/messages"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faMessage} className="w-5 text-center" />
                            <span className="ms-3">Messages</span>
                        </NavLink>

                        <NavLink
                            to="/reports"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faBook} className="w-5 text-center" />
                            <span className="ms-3">Reports</span>
                        </NavLink>
                    </nav>
                </div>

                <div className='px-4 py-3 mt-4'>
                    <div className='font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2'>
                        Help & Settings 
                    </div>
                    <nav className='space-y-1'>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faGear} className="w-5 text-center" />
                            <span className="ms-3">Settings</span>
                        </NavLink>

                        <NavLink
                            to="/feedback"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faComment} className="w-5 text-center" />
                            <span className="ms-3">Feedback</span>
                        </NavLink>

                        <NavLink
                            to="/help"
                            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} className="w-5 text-center" />
                            <span className="ms-3">Help Center</span>
                        </NavLink>
                    </nav>
                </div>
            </div>

            <div className='px-4 py-3'>
                <NavLink
                    to="/logout"
                    className="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-600 hover:bg-red-50 hover:text-red-600"
                >
                    <FontAwesomeIcon icon={faCircleLeft} className="w-5 text-center" />
                    <span className="ms-3">Log Out</span>
                </NavLink>
            </div>
        </div>
    )
}

export default SideHeader