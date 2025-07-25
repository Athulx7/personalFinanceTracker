import React, { useState } from 'react'
import UserSettings from './UserSettings'
import NotificationSettings from './NotificationSettings';
import PasswordSettings from './PasswordSettings';

function SettingsPage() {
    const [editMode, setEditMode] = useState({
        profile: false,
        general: false,
        notifications: false,
        password: false
    })

    const user = JSON.parse(sessionStorage.getItem('user'))

    const [Notisettings, setNotiSettings] = useState({
        emailNotifications: true,
        lowBalanceAlerts: true
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

    return (
        <>
            <div className='pb-3'>
                <div>
                    <UserSettings
                        editMode={editMode}
                        setEditMode={setEditMode}
                        user={user}
                        toggleEditMode={toggleEditMode}
                    />
                </div>

                <div>
                    <NotificationSettings
                        editMode={editMode}
                        Notisettings={Notisettings}
                        toggleEditMode={toggleEditMode}
                    />
                </div>

                <div className=''>
                    <PasswordSettings
                        editMode={editMode}
                        passwordFields={passwordFields}
                        toggleEditMode={toggleEditMode}
                    />
                </div>
            </div>
        </>
    )
}

export default SettingsPage
