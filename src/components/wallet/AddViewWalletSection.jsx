import { faEdit, faPlus, faTrashAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function AddViewWalletSection() {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className='cursor-pointer bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-300 relative' >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">
                                    <FontAwesomeIcon className='text-indigo-500' icon={faUniversity} />
                                </div>
                                <div>
                                    <h3 className="font-medium">Wallet Name</h3>
                                    <span className="text-sm text-gray-500 capitalize">Wallet Type</span>
                                </div>
                            </div>
                            <div className='text-lg font-bold text-green-600'> RS 676576 </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-3">
                            <button className="text-gray-500 hover:text-blue-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} size="sm" />
                            </button>
                            <button className="text-gray-500 hover:text-red-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                            </button>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-indigo-500 relative' >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">
                                    <FontAwesomeIcon className='text-indigo-500' icon={faUniversity} />
                                </div>
                                <div>
                                    <h3 className="font-medium">Wallet Name</h3>
                                    <span className="text-sm text-gray-500 capitalize">Wallet Type</span>
                                </div>
                            </div>
                            <div className='text-lg font-bold text-green-600'> RS 676576 </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-3">
                            <button className="text-gray-500 hover:text-blue-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} size="sm" />
                            </button>
                            <button className="text-gray-500 hover:text-red-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                            </button>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-300 relative' >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">
                                    <FontAwesomeIcon className='text-indigo-500' icon={faUniversity} />
                                </div>
                                <div>
                                    <h3 className="font-medium">Wallet Name</h3>
                                    <span className="text-sm text-gray-500 capitalize">Wallet Type</span>
                                </div>
                            </div>
                            <div className='text-lg font-bold text-green-600'> RS 676576 </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-3">
                            <button className="text-gray-500 hover:text-blue-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} size="sm" />
                            </button>
                            <button className="text-gray-500 hover:text-red-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                            </button>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-300 relative' >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">
                                    <FontAwesomeIcon className='text-indigo-500' icon={faUniversity} />
                                </div>
                                <div>
                                    <h3 className="font-medium">Wallet Name</h3>
                                    <span className="text-sm text-gray-500 capitalize">Wallet Type</span>
                                </div>
                            </div>
                            <div className='text-lg font-bold text-green-600'> RS 676576 </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-3">
                            <button className="text-gray-500 hover:text-blue-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} size="sm" />
                            </button>
                            <button className="text-gray-500 hover:text-red-500 p-1 cursor-pointer">
                                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                            </button>
                        </div>
                    </div>


                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-white">
                        <FontAwesomeIcon icon={faPlus} className="text-gray-400 mb-2" size="lg" />
                        <span className="text-gray-500">Add New Wallet</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddViewWalletSection
