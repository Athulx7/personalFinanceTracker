import { faEdit, faSave, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserSettings({ editMode, setEditMode, user, toggleEditMode }) {
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUser} className="text-indigo-500 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
                    </div>
                    {!editMode.profile ? (
                        <button
                            onClick={() => toggleEditMode('profile')}
                            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleEditMode('profile')}
                            className="text-gray-500 hover:text-gray-700 flex items-center text-sm cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faTimes} className="mr-1" />
                            Cancel
                        </button>
                    )}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center">
                        <div className="relative mb-4">
                            <img
                                src={"https://ui-avatars.com/api/?name=" + user.name}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-100"
                            />

                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            {editMode.profile ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={''}
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900 px-2 py-2 border-2 border-gray-100 rounded-lg">{user.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            {editMode.profile ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={''}
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900 px-2 py-2 border-2 border-gray-100">{user.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            {editMode.profile ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={user.phone ? user.phone : '0000000000'}
                                    onChange={''}
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900 px-2 py-2 border-2 border-gray-100">+91 {user.phone ? user.phone : '0000000000'}</p>
                            )}
                        </div>

                        {editMode.profile && (
                            <div className="flex justify-end pt-2">
                                <button
                                    type="button"
                                    onClick={() => alert('profile')}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                                >
                                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSettings
