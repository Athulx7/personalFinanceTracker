import { faBell, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NotificationSettings({ editMode, Notisettings, toggleEditMode }) {
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBell} className="text-indigo-500 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-800">Notification Preferences</h2>
                    </div>
                    {!editMode.notifications ? (
                        <button
                            onClick={() => toggleEditMode('notifications')}
                            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Edit
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleEditMode('notifications')}
                            className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faTimes} className="mr-1" />
                            Cancel
                        </button>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly summary email</label>
                            <p className="text-sm text-gray-500">Receive a monthly report of your finances</p>
                        </div>
                        {editMode.notifications ? (
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="emailNotifications"
                                    checked={Notisettings.emailNotifications}
                                    onChange={''}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        ) : (
                            <span className={`px-2 py-1 text-xs rounded-full ${Notisettings.emailNotifications ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                {Notisettings.emailNotifications ? 'Enabled' : 'Disabled'}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Low balance alerts</label>
                            <p className="text-sm text-gray-500">Get notified when your balance is low</p>
                        </div>
                        {editMode.notifications ? (
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="lowBalanceAlerts"
                                    checked={Notisettings.lowBalanceAlerts}
                                    onChange={''}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        ) : (
                            <span className={`px-2 py-1 text-xs rounded-full ${Notisettings.lowBalanceAlerts ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                {Notisettings.lowBalanceAlerts ? 'Enabled' : 'Disabled'}
                            </span>
                        )}
                    </div>
                </div>

                {editMode.notifications && (
                    <div className="flex justify-end pt-4">
                        <button
                            type="button"
                            onClick={() => handleSubmit('notifications')}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                        >
                            <FontAwesomeIcon icon={faSave} className="mr-2" />
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default NotificationSettings
