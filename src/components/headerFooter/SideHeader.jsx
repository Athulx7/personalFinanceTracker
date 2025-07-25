import { faCircleInfo, faCircleLeft, faComment, faFile, faGear, faHouse, faMessage, faRightLeft, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SideHeader({ collapsed }) {
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div className={`h-full flex flex-col justify-between ${collapsed ? 'px-2' : 'px-4'}`}>
            <div className="flex flex-col">

                <div className={`py-3 ${collapsed ? 'px-1' : 'px-1'}`}>
                    {!collapsed && (
                        <div className='font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2'>
                            Menu
                        </div>
                    )}
                    <nav className='space-y-1'>
                        <NavLink
                            to="/home"
                            end
                            className={({ isActive }) => `flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faHouse} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">Overview</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    Overview
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/wallet"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                        >
                            <FontAwesomeIcon icon={faWallet} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">My Wallet</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    My Wallet
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/activity_expence"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">Activity - Expense</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    Activity - Expense
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/activity_income"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">Activity - Income</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    Activity - Income
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/messages"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faMessage} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">Messages</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    Messages
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/reports"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faFile} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">Reports</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    Reports
                                </span>
                            )}
                        </NavLink>
                    </nav>
                </div>

                <div className={`py-3 ${collapsed ? 'px-1' : 'px-1'}`}>
                    {!collapsed && (
                    <div className='font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2'>
                        Help & Settings
                    </div>
                     )}
                    <nav className='space-y-1'>
                        <NavLink
                            to="/home/settings"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faGear} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">settings</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    settings
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/feedback"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faComment} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">feedback</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    feedback
                                </span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/home/help"
                            className={({ isActive }) => `group flex items-center ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}

                        >
                            <FontAwesomeIcon icon={faCircleInfo} className="w-5 text-center" />
                            {!collapsed && <span className="ms-3">help</span>}
                            {collapsed && (
                                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    help
                                </span>
                            )}
                        </NavLink>

                    </nav>
                </div>
            </div>

            <div className={`py-3 mb-15 ${collapsed ? 'px-1' : 'px-1'}`}>
                <div onClick={handleLogout}
                    className="flex items-center cursor-pointer px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-600 hover:bg-red-50 hover:text-red-600"
                >
                    <FontAwesomeIcon icon={faCircleLeft} className="w-5 text-center" />
                    {!collapsed && (
                    <span className="ms-3">Log Out</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SideHeader