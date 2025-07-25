import { faCalendar, faEnvelope, faMapMarkerAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MyProfile() {
    const profile = JSON.parse(sessionStorage.getItem('user'))

    return (
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg overflow-hidden p-8">

            <div className="text-center mb-8">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-4 shadow-inner border-2 border-white">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="text-indigo-600 text-4xl"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{profile.name}</h2>
                <p className="text-indigo-500 font-medium">{profile.email}</p>
            </div>

            <div className="space-y-5">

                <div className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4 text-indigo-600">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</h3>
                        <p className="text-gray-800 font-medium">{profile.name}</p>
                    </div>
                </div>

                <div className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4 text-indigo-600">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</h3>
                        <p className="text-gray-800 font-medium">{profile.email}</p>
                    </div>
                </div>

                <div className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4 text-indigo-600">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</h3>
                        <p className="text-gray-800 font-medium">
                            {profile.phone ? profile.phone : 'Not provided'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4 text-indigo-600">
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Member Since</h3>
                        <p className="text-gray-800 font-medium">
                            {profile.joinDate ? profile.joinDate : 'Unknown'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4 text-indigo-600">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</h3>
                        <p className="text-gray-800 font-medium">
                            {profile.location ? profile.location : 'Not specified'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile