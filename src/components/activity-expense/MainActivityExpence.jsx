import { faPlus, faRightLeft, faCalendarAlt, faTags, faWallet, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ExpenseSelection from './ExpenseSelection'
import ExpenseTableView from './ExpenseTableView'
import CommonModal from '../../basicComponents/CommonModal'
import CommonDropDown from '../../basicComponents/CommonDropDown'
import CommonDatePicker from '../../basicComponents/CommonDatePicker'

function MainActivityExpence() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenseData, setExpenseData] = useState({
        amount: '',
        category: '',
        wallet: '',
        date: new Date(),
        notes: ''
    });

    const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Bills', 'Healthcare'].map(cat => ({
        label: cat,
        value: cat
    }));

    const wallets = ['Cash', 'SBI Bank', 'HDFC Credit Card', 'Paytm Wallet'].map(wallet => ({
        label: wallet,
        value: wallet
    }));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setExpenseData(prev => ({
            ...prev,
            date: date
        }));
    };

    const handleCategoryChange = (selectedCategory) => {
        setExpenseData(prev => ({
            ...prev,
            category: selectedCategory.value
        }));
    };

    const handleWalletChange = (selectedWallet) => {
        setExpenseData(prev => ({
            ...prev,
            wallet: selectedWallet.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('New expense:', expenseData);
        setIsModalOpen(false);
        // Reset form
        setExpenseData({
            amount: '',
            category: '',
            wallet: '',
            date: new Date(),
            notes: ''
        });
    };

    const addExpenseForm = () => (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FontAwesomeIcon icon={faTags} className="mr-2 text-indigo-500" />
                    Amount *
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        ₹
                    </span>
                    <input
                        type="number"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleInputChange}
                        className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="0.00"
                        step="0.01"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FontAwesomeIcon icon={faTags} className="mr-2 text-indigo-500" />
                        Category *
                    </label>
                    <CommonDropDown
                        options={categories}
                        value={categories.find(cat => cat.value === expenseData.category) || null}
                        onChange={handleCategoryChange}
                        placeholder="Select Category"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <FontAwesomeIcon icon={faWallet} className="mr-2 text-indigo-500" />
                        Wallet *
                    </label>
                    <CommonDropDown
                        options={wallets}
                        value={wallets.find(w => w.value === expenseData.wallet) || null}
                        onChange={handleWalletChange}
                        placeholder="Select Wallet"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-indigo-500" />
                    Date *
                </label>
                <CommonDatePicker
                    value={expenseData.date}
                    onChange={handleDateChange}
                    placeholder="Select date"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FontAwesomeIcon icon={faComment} className="mr-2 text-indigo-500" />
                    Notes
                </label>
                <textarea
                    name="notes"
                    value={expenseData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Optional description"
                />
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
                    Add Expense
                </button>
            </div>
        </form>
    )

    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='font-semibold text-xl md:text-2xl text-gray-800'>
                        <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center text-indigo-500" />
                        <span className="ms-3">Activity - Expense</span>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="font-semibold text-sm bg-indigo-500 px-4 py-2 hover:bg-indigo-600 cursor-pointer text-white rounded-lg flex items-center"
                    >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add New Expense
                    </button>
                </div>

                <div className="mb-6">
                    <ExpenseSelection />
                </div>

                <div className=''>
                    <ExpenseTableView />
                </div>
            </div>

            <CommonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Expense"
                body={addExpenseForm}
                size="2xl"
            />
        </>
    )
}

export default MainActivityExpence