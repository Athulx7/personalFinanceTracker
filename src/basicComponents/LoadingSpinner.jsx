import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = ({
    fullScreen = false,
    size = 'md',
    color = 'indigo',
    message = '',
    transparentBg = false
}) => {
    const sizeClasses = {
        sm: 'h-20 w-20',
        md: 'h-10 w-10',
        lg: 'h-16 w-16',
        xl: 'h-20 w-20'
    }

    const colorClasses = {
        indigo: 'text-indigo-600',
        white: 'text-white',
        gray: 'text-gray-600',
        red: 'text-red-600',
        green: 'text-green-600'
    }

    return (
        <div className={`${fullScreen ? 'fixed inset-0 z-50' : ''} ${transparentBg ? '' : ' bg-white/70'} flex items-center justify-center`}>
            <div className={`flex flex-col items-center ${fullScreen ? 'space-y-4' : 'space-y-2'}`}>
                <FontAwesomeIcon
                    icon={faCircleNotch}
                    className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
                    spin
                />
                {message && (
                    <p className={`${size === 'xl' ? 'text-xl' : 'text-base'} ${colorClasses[color]} font-medium`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    )
}

export default LoadingSpinner