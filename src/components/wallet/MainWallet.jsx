import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrashAlt, 
  faCreditCard, 
  faMoneyBillAlt, 
  faUniversity,
  faWallet,
  faMobileAlt,
  faRupeeSign,
  faDollarSign,
  faEuroSign,
  faPoundSign
} from '@fortawesome/free-solid-svg-icons';

function MainWallet() {
  // Sample initial wallet data
  const [wallets, setWallets] = useState([
    { id: 1, name: 'SBI Savings', type: 'bank', balance: 50000, currency: '₹' },
    { id: 2, name: 'Cash', type: 'cash', balance: 5000, currency: '₹' },
    { id: 3, name: 'HDFC Credit Card', type: 'credit', balance: -10000, currency: '₹' }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, walletId: 1, amount: 2000, type: 'expense', category: 'Shopping', date: '2023-05-15', notes: 'Amazon purchase' },
    { id: 2, walletId: 1, amount: 50000, type: 'income', category: 'Salary', date: '2023-05-01', notes: 'Monthly salary' },
    { id: 3, walletId: 3, amount: 10000, type: 'expense', category: 'Electronics', date: '2023-05-10', notes: 'New phone' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showTransactions, setShowTransactions] = useState(null);
  const [newWallet, setNewWallet] = useState({
    name: '',
    type: 'bank',
    balance: 0,
    currency: '₹'
  });

  const handleAddWallet = () => {
    setWallets([...wallets, { ...newWallet, id: wallets.length + 1 }]);
    setNewWallet({ name: '', type: 'bank', balance: 0, currency: '₹' });
    setShowAddModal(false);
  };

  const handleDeleteWallet = (id) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
    setTransactions(transactions.filter(t => t.walletId !== id));
    if (showTransactions === id) setShowTransactions(null);
  };

  const getWalletTransactions = (walletId) => {
    return transactions
      .filter(t => t.walletId === walletId)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'bank': return <FontAwesomeIcon icon={faUniversity} className="text-blue-500" />;
      case 'credit': return <FontAwesomeIcon icon={faCreditCard} className="text-red-500" />;
      case 'cash': return <FontAwesomeIcon icon={faMoneyBillAlt} className="text-green-500" />;
      case 'digital': return <FontAwesomeIcon icon={faMobileAlt} className="text-purple-500" />;
      default: return <FontAwesomeIcon icon={faWallet} className="text-gray-500" />;
    }
  };

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case '₹': return <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />;
      case '$': return <FontAwesomeIcon icon={faDollarSign} className="mr-1" />;
      case '€': return <FontAwesomeIcon icon={faEuroSign} className="mr-1" />;
      case '£': return <FontAwesomeIcon icon={faPoundSign} className="mr-1" />;
      default: return <span>{currency}</span>;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="font-semibold text-xl md:text-2xl text-gray-800 mb-6">
        <FontAwesomeIcon icon={faWallet} className="mr-2 text-blue-500" />
        My Wallet
      </div>

      {/* Wallet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {wallets.map(wallet => (
          <div 
            key={wallet.id} 
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md 
              ${showTransactions === wallet.id ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setShowTransactions(showTransactions === wallet.id ? null : wallet.id)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="text-2xl">
                  {getIconForType(wallet.type)}
                </div>
                <div>
                  <h3 className="font-medium">{wallet.name}</h3>
                  <span className="text-sm text-gray-500 capitalize">{wallet.type}</span>
                </div>
              </div>
              <div className={`text-lg font-semibold ${wallet.balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {getCurrencyIcon(wallet.currency)}
                {Math.abs(wallet.balance).toLocaleString()}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-3">
              <button 
                className="text-gray-500 hover:text-blue-500 p-1"
                onClick={(e) => { e.stopPropagation(); /* Edit logic here */ }}
              >
                <FontAwesomeIcon icon={faEdit} size="sm" />
              </button>
              <button 
                className="text-gray-500 hover:text-red-500 p-1"
                onClick={(e) => { e.stopPropagation(); handleDeleteWallet(wallet.id); }}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
              </button>
            </div>
          </div>
        ))}

        {/* Add New Wallet Card */}
        <div 
          className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
          onClick={() => setShowAddModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="text-gray-400 mb-2" size="lg" />
          <span className="text-gray-500">Add New Wallet</span>
        </div>
      </div>

      {/* Transactions Section */}
      {showTransactions && (
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            Transactions for {wallets.find(w => w.id === showTransactions)?.name}
          </h3>
          
          {getWalletTransactions(showTransactions).length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getWalletTransactions(showTransactions).map(transaction => (
                    <tr key={transaction.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                        {transaction.category}
                      </td>
                      <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}
                        {getCurrencyIcon(wallets.find(w => w.id === transaction.walletId)?.currency)}
                        {Math.abs(transaction.amount).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {transaction.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No transactions found for this wallet.</p>
          )}
        </div>
      )}

      {/* Add Wallet Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />
              Add New Wallet
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newWallet.name}
                  onChange={(e) => setNewWallet({...newWallet, name: e.target.value})}
                  placeholder="e.g., SBI Savings"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newWallet.type}
                  onChange={(e) => setNewWallet({...newWallet, type: e.target.value})}
                >
                  <option value="bank">Bank Account</option>
                  <option value="credit">Credit Card</option>
                  <option value="cash">Cash</option>
                  <option value="digital">Digital Wallet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Balance</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  value={newWallet.balance}
                  onChange={(e) => setNewWallet({...newWallet, balance: parseFloat(e.target.value) || 0})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newWallet.currency}
                  onChange={(e) => setNewWallet({...newWallet, currency: e.target.value})}
                >
                  <option value="₹">₹ (INR)</option>
                  <option value="$">$ (USD)</option>
                  <option value="€">€ (EUR)</option>
                  <option value="£">£ (GBP)</option>
                </select>
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
                onClick={handleAddWallet}
                disabled={!newWallet.name.trim()}
              >
                Add Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainWallet;