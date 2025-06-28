import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faPlus,
  faEdit,
  faTrashAlt,
  faCalendarAlt,
  faWallet,
  faTags,
  faRupeeSign
} from '@fortawesome/free-solid-svg-icons';

function MainActivityExpense() {
  // Sample expense data
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2023-05-15', category: 'Groceries', amount: 2500, wallet: 'SBI Savings', notes: 'Big Bazaar' },
    { id: 2, date: '2023-05-10', category: 'Rent', amount: 12000, wallet: 'HDFC Bank', notes: 'Monthly rent' },
    { id: 3, date: '2023-05-05', category: 'Dining', amount: 800, wallet: 'Cash', notes: 'Dinner with friends' },
    { id: 4, date: '2023-05-01', category: 'Transport', amount: 1500, wallet: 'Paytm Wallet', notes: 'Monthly metro pass' }
  ]);

  // Filter states
  const [filters, setFilters] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    category: '',
    wallet: '',
    fromDate: '',
    toDate: ''
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '',
    amount: 0,
    wallet: '',
    notes: ''
  });

  // Available categories and wallets (would normally come from props/context)
  const categories = ['Groceries', 'Rent', 'Dining', 'Transport', 'Entertainment', 'Utilities'];
  const wallets = ['SBI Savings', 'HDFC Bank', 'Cash', 'Paytm Wallet'];

  // Calculate monthly total
  const monthlyTotal = expenses
    .filter(exp => {
      const expDate = new Date(exp.date);
      return (
        expDate.getMonth() + 1 === filters.month &&
        expDate.getFullYear() === filters.year
      );
    })
    .reduce((sum, exp) => sum + exp.amount, 0);

  // Filter expenses based on selected filters
  const filteredExpenses = expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return (
      (filters.month ? expDate.getMonth() + 1 === filters.month : true) &&
      (filters.year ? expDate.getFullYear() === filters.year : true) &&
      (filters.category ? exp.category === filters.category : true) &&
      (filters.wallet ? exp.wallet === filters.wallet : true) &&
      (filters.fromDate ? exp.date >= filters.fromDate : true) &&
      (filters.toDate ? exp.date <= filters.toDate : true)
    );
  });

  const handleAddExpense = () => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setNewExpense({
      date: new Date().toISOString().split('T')[0],
      category: '',
      amount: 0,
      wallet: '',
      notes: ''
    });
    setShowAddModal(false);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header with monthly total */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Expense Tracking
        </h2>
        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
          This Month's Total: <FontAwesomeIcon icon={faRupeeSign} /> {monthlyTotal.toLocaleString()}
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-700">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filter Expenses
          </h3>
          <button 
            className="text-blue-600 text-sm"
            onClick={() => setFilters({
              month: '',
              year: '',
              category: '',
              wallet: '',
              fromDate: '',
              toDate: ''
            })}
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Month/Year Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Month/Year</label>
            <div className="flex gap-2">
              <select
                className="flex-1 p-2 border rounded-md"
                value={filters.month}
                onChange={(e) => setFilters({...filters, month: parseInt(e.target.value)})}
              >
                <option value="">All Months</option>
                {Array.from({length: 12}, (_, i) => (
                  <option key={i+1} value={i+1}>
                    {new Date(2000, i, 1).toLocaleString('default', {month: 'long'})}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 p-2 border rounded-md"
                value={filters.year}
                onChange={(e) => setFilters({...filters, year: parseInt(e.target.value)})}
              >
                <option value="">All Years</option>
                {Array.from({length: 5}, (_, i) => (
                  <option key={i} value={new Date().getFullYear() - i}>
                    {new Date().getFullYear() - i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Wallet Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wallet</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.wallet}
              onChange={(e) => setFilters({...filters, wallet: e.target.value})}
            >
              <option value="">All Wallets</option>
              {wallets.map(wallet => (
                <option key={wallet} value={wallet}>{wallet}</option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="flex-1 p-2 border rounded-md"
                value={filters.fromDate}
                onChange={(e) => setFilters({...filters, fromDate: e.target.value})}
              />
              <span className="self-center">to</span>
              <input
                type="date"
                className="flex-1 p-2 border rounded-md"
                value={filters.toDate}
                onChange={(e) => setFilters({...filters, toDate: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Expense Button */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => setShowAddModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Expense
        </button>
      </div>

      {/* Expenses Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <FontAwesomeIcon icon={faTags} className="mr-1" />
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <FontAwesomeIcon icon={faWallet} className="mr-1" />
                Wallet
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map(expense => (
                <tr key={expense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(expense.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                    {expense.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                    -<FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                    {expense.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {expense.wallet}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {expense.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500 hover:text-blue-700 mr-3">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                  No expenses found matching your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />
              Add New Expense
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faRupeeSign} className="text-gray-400" />
                  </span>
                  <input
                    type="number"
                    className="pl-8 w-full p-2 border rounded-md"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value) || 0})}
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newExpense.wallet}
                  onChange={(e) => setNewExpense({...newExpense, wallet: e.target.value})}
                >
                  <option value="">Select Wallet</option>
                  {wallets.map(wallet => (
                    <option key={wallet} value={wallet}>{wallet}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                  value={newExpense.date}
                  onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newExpense.notes}
                  onChange={(e) => setNewExpense({...newExpense, notes: e.target.value})}
                  placeholder="Description"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleAddExpense}
                disabled={!newExpense.amount || !newExpense.category || !newExpense.wallet}
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainActivityExpense;