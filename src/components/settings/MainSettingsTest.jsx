import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faCog,
    faPalette,
    faBell,
    faLock,
    faSignOutAlt,
    faSave,
    faCamera,
    faEdit,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

function MainSettingsTest() {
    // State for form values
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        profileImage: null,
        previewImage: null
    });

    const [settings, setSettings] = useState({
        currency: '₹',
        dateFormat: 'DD/MM/YYYY',
        timeZone: 'Asia/Kolkata',
        emailNotifications: true,
        lowBalanceAlerts: true
    });

    const [editMode, setEditMode] = useState({
        profile: false,
        general: false,
        notifications: false,
        password: false
    });

    const [passwordFields, setPasswordFields] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const toggleEditMode = (section) => {
        setEditMode(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUser(prev => ({
                ...prev,
                profileImage: file,
                previewImage: URL.createObjectURL(file)
            }));
        }
    };

    const handleSettingsChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordFields(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (section) => {
        alert(`${section} settings saved successfully!`);
        setEditMode(prev => ({ ...prev, [section]: false }));
        // Here you would typically send the data to your backend
    };

    const handleLogout = () => {
        alert('Logging out...');
        // Clear session/token and redirect to login
    };

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <FontAwesomeIcon icon={faCog} className="text-2xl text-indigo-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
            </div>

            {/* User Profile Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUser} className="text-indigo-500 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
                    </div>
                    {!editMode.profile ? (
                        <button
                            onClick={() => toggleEditMode('profile')}
                            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleEditMode('profile')}
                            className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
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
                                src={user.previewImage || "https://ui-avatars.com/api/?name=" + user.name}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-100"
                            />
                            {editMode.profile && (
                                <label className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-600 transition-colors">
                                    <FontAwesomeIcon icon={faCamera} />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
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
                                    onChange={handleUserChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900">{user.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            {editMode.profile ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleUserChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900">{user.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            {editMode.profile ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleUserChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <p className="p-2 text-gray-900">{user.phone}</p>
                            )}
                        </div>

                        {editMode.profile && (
                            <div className="flex justify-end pt-2">
                                <button
                                    type="button"
                                    onClick={() => handleSubmit('profile')}
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

            {/* General Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPalette} className="text-indigo-500 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-800">General Settings</h2>
                    </div>
                    {!editMode.general ? (
                        <button
                            onClick={() => toggleEditMode('general')}
                            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Edit
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleEditMode('general')}
                            className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
                        >
                            <FontAwesomeIcon icon={faTimes} className="mr-1" />
                            Cancel
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                        {editMode.general ? (
                            <select
                                name="currency"
                                value={settings.currency}
                                onChange={handleSettingsChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="₹">Indian Rupee (₹)</option>
                                <option value="$">US Dollar ($)</option>
                                <option value="€">Euro (€)</option>
                                <option value="£">British Pound (£)</option>
                            </select>
                        ) : (
                            <p className="p-2 text-gray-900">{settings.currency}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                        {editMode.general ? (
                            <select
                                name="dateFormat"
                                value={settings.dateFormat}
                                onChange={handleSettingsChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            </select>
                        ) : (
                            <p className="p-2 text-gray-900">{settings.dateFormat}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                        {editMode.general ? (
                            <select
                                name="timeZone"
                                value={settings.timeZone}
                                onChange={handleSettingsChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="Asia/Kolkata">India (IST)</option>
                                <option value="America/New_York">Eastern Time (ET)</option>
                                <option value="Europe/London">London (GMT)</option>
                            </select>
                        ) : (
                            <p className="p-2 text-gray-900">{settings.timeZone.replace('_', ' ').split('/')[1]}</p>
                        )}
                    </div>
                </div>

                {editMode.general && (
                    <div className="flex justify-end pt-4">
                        <button
                            type="button"
                            onClick={() => handleSubmit('general')}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                        >
                            <FontAwesomeIcon icon={faSave} className="mr-2" />
                            Save Changes
                        </button>
                    </div>
                )}
            </div>

            {/* Notification Preferences */}
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
                                    checked={settings.emailNotifications}
                                    onChange={handleSettingsChange}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        ) : (
                            <span className={`px-2 py-1 text-xs rounded-full ${settings.emailNotifications ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                {settings.emailNotifications ? 'Enabled' : 'Disabled'}
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
                                    checked={settings.lowBalanceAlerts}
                                    onChange={handleSettingsChange}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        ) : (
                            <span className={`px-2 py-1 text-xs rounded-full ${settings.lowBalanceAlerts ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                {settings.lowBalanceAlerts ? 'Enabled' : 'Disabled'}
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

            {/* Password Change */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
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
                                onChange={handlePasswordChange}
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
                                onChange={handlePasswordChange}
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
                                onChange={handlePasswordChange}
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

            {/* Logout Button */}
            <div className="flex justify-center">
                <button
                    onClick={handleLogout}
                    className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 flex items-center"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                    Logout
                </button>
            </div>
        </div>
    );
}

export default MainSettingsTest;