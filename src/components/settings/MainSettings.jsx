import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SettingsPage from './SettingsPage'

function MainSettings() {
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faGear} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">Settings</span>
                </div>

                <div>
                    <SettingsPage />
                </div>
            </div>
        </>
    )
}

export default MainSettings
