import { faCreditCard, faEdit, faMobileAlt, faMoneyBillAlt, faPlus, faTrashAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import CommonModal from '../../basicComponents/CommonModal';

function AddViewWalletSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const walletTypes = [
        { value: 'bank', label: 'Bank Account', icon: faUniversity },
        { value: 'credit', label: 'Credit Card', icon: faCreditCard },
        { value: 'cash', label: 'Cash', icon: faMoneyBillAlt },
        { value: 'digital', label: 'Digital Wallet', icon: faMobileAlt }
    ];
    const [newWallet, setNewWallet] = useState({
        name: '',
        type: 'bank',
        balance: '',
        currency: '₹'
    });
    const addNewWalletForm = () => (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Name *</label>
                <input
                    type="text"
                    name="name"
                    value={''}
                    onChange={''}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., SBI Savings Account"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Type *</label>
                <div className="grid grid-cols-2 gap-2">
                    {walletTypes.map((type) => (
                        <label
                            key={type.value}
                            className={`flex items-center p-3 border rounded-md cursor-pointer ${newWallet.type === type.value
                                    ? 'border-indigo-500 bg-indigo-50'
                                    : 'border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <input
                                type="radio"
                                name="type"
                                value={type.value}
                                checked={newWallet.type === type.value}
                                onChange={''}
                                className="hidden"
                                required
                            />
                            <FontAwesomeIcon
                                icon={type.icon}
                                className={`mr-2 ${newWallet.type === type.value
                                        ? 'text-indigo-600'
                                        : 'text-gray-500'
                                    }`}
                            />
                            <span>{type.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Initial Balance *</label>
                    <div className="relative">
                        <select
                            name="currency"
                            value={newWallet.currency}
                            onChange={''}
                            className="absolute left-0 top-0 h-full px-2 border-r border-gray-300 bg-gray-100 rounded-l-md"
                        >
                            <option >99</option>
                        </select>
                        <input
                            type="number"
                            name="balance"
                            value={newWallet.balance}
                            onChange={''}
                            className="w-full pl-12 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="0.00"
                            step="0.01"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency *</label>
                    <select
                        name="currency"
                        value={newWallet.currency}
                        onChange={''}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    >

                        <option >99</option>

                    </select>
                </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
                <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Add Wallet
                </button>
            </div>
        </form>
    );
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


                    <div onClick={() => setIsModalOpen(true)} className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-white">
                        <FontAwesomeIcon icon={faPlus} className="text-gray-400 mb-2" size="lg" />
                        <span className="text-gray-500">Add New Wallet</span>
                    </div>
                </div>
            </div>


            <CommonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Wallet"
                body={addNewWalletForm()}
                size='2xl'
            />
        </>
    )
}

export default AddViewWalletSection
