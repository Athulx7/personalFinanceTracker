import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus, faEdit, faTrashAlt, faCalendarAlt, faWallet, faTags, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

function MainActivityIncome() {
  const [incomes, setIncomes] = useState([
    { id: 1, date: '2023-05-25', category: 'Salary', amount: 50000, wallet: 'SBI Savings', notes: 'Monthly salary' },
    { id: 2, date: '2023-05-20', category: 'Freelance', amount: 12000, wallet: 'HDFC Bank', notes: 'Web design project' },
    { id: 3, date: '2023-05-15', category: 'Dividends', amount: 3500, wallet: 'Paytm Wallet', notes: 'Stock dividends' },
    { id: 4, date: '2023-05-05', category: 'Bonus', amount: 8000, wallet: 'SBI Savings', notes: 'Performance bonus' }
  ]);

  const [filters, setFilters] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    category: '',
    wallet: '',
    fromDate: '',
    toDate: ''
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newIncome, setNewIncome] = useState({
    date: new Date().toISOString().split('T')[0],
    category: '',
    amount: 0,
    wallet: '',
    notes: ''
  });

  const categories = ['Salary', 'Freelance', 'Dividends', 'Bonus', 'Interest', 'Rental', 'Other'];
  const wallets = ['SBI Savings', 'HDFC Bank', 'Cash', 'Paytm Wallet'];

  const monthlyTotal = incomes.filter(inc => {
    const incDate = new Date(inc.date);
    return (incDate.getMonth() + 1 === filters.month && incDate.getFullYear() === filters.year);
  }).reduce((sum, inc) => sum + inc.amount, 0);

  const filteredIncomes = incomes.filter(inc => {
    const incDate = new Date(inc.date);
    return (
      (filters.month ? incDate.getMonth() + 1 === filters.month : true) &&
      (filters.year ? incDate.getFullYear() === filters.year : true) &&
      (filters.category ? inc.category === filters.category : true) &&
      (filters.wallet ? inc.wallet === filters.wallet : true) &&
      (filters.fromDate ? inc.date >= filters.fromDate : true) &&
      (filters.toDate ? inc.date <= filters.toDate : true)
    );
  });

  const handleAddIncome = () => {
    setIncomes([...incomes, { ...newIncome, id: incomes.length + 1 }]);
    setNewIncome({
      date: new Date().toISOString().split('T')[0],
      category: '',
      amount: 0,
      wallet: '',
      notes: ''
    });
    setShowAddModal(false);
  };

  const handleDeleteIncome = (id) => {
    setIncomes(incomes.filter(inc => inc.id !== id));
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header and Monthly Total */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Income Tracking</h2>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          This Month's Total: <FontAwesomeIcon icon={faRupeeSign} /> {monthlyTotal.toLocaleString()}
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-700">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filter Income
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
      
      {/* Add Income Button */}
      <div className="flex justify-end mb-4">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => setShowAddModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Income
        </button>
      </div>
      
      {/* Income Table */}
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
            {filteredIncomes.length > 0 ? (
              filteredIncomes.map(income => (
                <tr key={income.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(income.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                    {income.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                    {income.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {income.wallet}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {income.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500 hover:text-blue-700 mr-3">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-700" 
                      onClick={() => handleDeleteIncome(income.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                  No income records found matching your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Add Income Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />
              Add New Income
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
                    value={newIncome.amount} 
                    onChange={(e) => setNewIncome({...newIncome, amount: parseFloat(e.target.value) || 0})}
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  className="w-full p-2 border rounded-md" 
                  value={newIncome.category} 
                  onChange={(e) => setNewIncome({...newIncome, category: e.target.value})}
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
                  value={newIncome.wallet} 
                  onChange={(e) => setNewIncome({...newIncome, wallet: e.target.value})}
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
                  value={newIncome.date} 
                  onChange={(e) => setNewIncome({...newIncome, date: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md" 
                  value={newIncome.notes} 
                  onChange={(e) => setNewIncome({...newIncome, notes: e.target.value})}
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
                onClick={handleAddIncome} 
                disabled={!newIncome.amount || !newIncome.category || !newIncome.wallet}
              >
                Add Income
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainActivityIncome;