import { faEdit, faLock, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PasswordSettings({ editMode, passwordFields, toggleEditMode }) {
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLock} className="text-indigo-500 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
                    </div>
                    {!editMode.password ? (
                        <button
                            onClick={() => toggleEditMode('password')}
                            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Change Password
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleEditMode('password')}
                            className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faTimes} className="mr-1" />
                            Cancel
                        </button>
                    )}
                </div>

                {editMode.password ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={passwordFields.currentPassword}
                                onChange={''}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter current password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={passwordFields.newPassword}
                                onChange={''}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={passwordFields.confirmPassword}
                                onChange={''}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Confirm new password"
                            />
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="button"
                                onClick={() => handleSubmit('password')}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                            >
                                <FontAwesomeIcon icon={faSave} className="mr-2" />
                                Update Password
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">Password last changed 3 months ago</p>
                )}
            </div>
        </>
    )
}

export default PasswordSettings
