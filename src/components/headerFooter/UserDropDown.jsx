import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDropDown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={() => setOpen(!open)} className=' mt-2 mb-2 mr-2 py-1 px-3 cursor-pointer flex border-2 border-gray-200 rounded-lg'>
                <div className="w-9 h-9 rounded-full bg-gray-200 text-indigo-600 flex items-center justify-center font-bold">
                    U
                </div><span className='mt-1 ms-3 font-semibold'>User Name </span>
                <div><FontAwesomeIcon className='text-indigo-500 mt-2 ms-2' icon={open ? faChevronUp : faChevronDown} /></div>
                </div>


            {open && (
                <div className="absolute right- w-44 border-2 border-gray-200 bg-white rounded-lg shadow-lg z-50">
                    <ul className="flex flex-col text-sm">
                        <li
                            className="px-4 py-2 border-b border-indigo-500 hover:bg-indigo-100 cursor-pointer font-semibold"
                            onClick={() => {
                                navigate('/profile');
                                setOpen(false);
                            }}
                        >
                            My Profile
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer font-semibold"
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserDropDown;
