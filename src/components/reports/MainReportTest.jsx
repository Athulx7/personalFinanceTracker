import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilter,
  faDownload,
  faChartPie,
  faChartBar,
  faCalendarAlt,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-multi-date-picker';

function MainReportTest() {
  const [reportType, setReportType] = useState('monthly');
  const [filters, setFilters] = useState({
    dateRange: [],
    wallet: '',
    category: ''
  });
  const [chartType, setChartType] = useState('bar');

  // Sample data - in a real app this would come from an API
  const reportData = {
    monthly: [
      { month: 'Jan 2023', income: 75000, expense: 45000, savings: 30000 },
      { month: 'Feb 2023', income: 80000, expense: 50000, savings: 30000 },
      { month: 'Mar 2023', income: 85000, expense: 55000, savings: 30000 },
      { month: 'Apr 2023', income: 90000, expense: 60000, savings: 30000 },
      { month: 'May 2023', income: 95000, expense: 65000, savings: 30000 },
      { month: 'Jun 2023', income: 100000, expense: 70000, savings: 30000 },
    ],
    category: [
      { category: 'Rent', amount: 30000, percentage: 30 },
      { category: 'Groceries', amount: 15000, percentage: 15 },
      { category: 'Transport', amount: 10000, percentage: 10 },
      { category: 'Entertainment', amount: 8000, percentage: 8 },
      { category: 'Utilities', amount: 12000, percentage: 12 },
      { category: 'Others', amount: 25000, percentage: 25 },
    ],
    wallet: [
      { wallet: 'SBI Savings', balance: 50000, income: 75000, expense: 45000 },
      { wallet: 'HDFC Bank', balance: 120000, income: 50000, expense: 30000 },
      { wallet: 'Cash', balance: 5000, income: 10000, expense: 8000 },
    ]
  };

  const wallets = ['All Wallets', 'SBI Savings', 'HDFC Bank', 'Cash', 'Paytm Wallet'];
  const categories = ['All Categories', 'Rent', 'Groceries', 'Transport', 'Entertainment', 'Utilities', 'Others'];

  const handleExport = (format) => {
    alert(`Exporting ${reportType} report as ${format}`);
    // In a real app, this would generate and download the file
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Financial Reports</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => handleExport('pdf')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Export PDF
          </button>
          <button 
            onClick={() => handleExport('csv')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Report Controls */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Report Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
            <select
              className="w-full p-2 border rounded-md"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="monthly">Monthly Summary</option>
              <option value="category">Category Breakdown</option>
              <option value="wallet">Wallet Summary</option>
              <option value="custom">Custom Report</option>
            </select>
          </div>

          {/* Date Range Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <DatePicker
              range
              value={filters.dateRange}
              onChange={(date) => setFilters({...filters, dateRange: date})}
              inputClass="w-full p-2 border rounded-md"
              placeholder="Select date range"
              format="MMM DD, YYYY"
            />
          </div>

          {/* Wallet Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wallet</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.wallet}
              onChange={(e) => setFilters({...filters, wallet: e.target.value})}
            >
              {wallets.map(wallet => (
                <option key={wallet} value={wallet}>{wallet}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chart View Toggle */}
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setChartType('bar')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              chartType === 'bar' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Bar Chart
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              chartType === 'pie' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faChartPie} className="mr-2" />
            Pie Chart
          </button>
        </div>
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Report Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {reportType === 'monthly' && 'Monthly Financial Report'}
            {reportType === 'category' && 'Spending by Category'}
            {reportType === 'wallet' && 'Wallet-wise Summary'}
            {reportType === 'custom' && 'Custom Report'}
          </h2>
          <div className="text-sm text-gray-500">
            {filters.dateRange.length === 2 ? (
              `${new Date(filters.dateRange[0]).toLocaleDateString()} - ${new Date(filters.dateRange[1]).toLocaleDateString()}`
            ) : 'All dates'}
            {filters.wallet && ` • ${filters.wallet}`}
            {filters.category && ` • ${filters.category}`}
          </div>
        </div>

        {/* Chart Placeholder - In a real app you would use Chart.js or similar */}
        <div className="bg-gray-100 rounded-lg p-8 mb-6 flex items-center justify-center">
          <div className="text-center">
            <FontAwesomeIcon 
              icon={chartType === 'bar' ? faChartBar : faChartPie} 
              className="text-4xl text-gray-400 mb-2" 
            />
            <p className="text-gray-500">
              {chartType === 'bar' ? 'Bar Chart' : 'Pie Chart'} Visualization
              <br />
              (Data would be displayed here)
            </p>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {reportType === 'monthly' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                  </>
                )}
                {reportType === 'category' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                  </>
                )}
                {reportType === 'wallet' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reportData[reportType].map((item, index) => (
                <tr key={index}>
                  {reportType === 'monthly' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.month}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">₹{item.income.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">₹{item.expense.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">₹{item.savings.toLocaleString()}</td>
                    </>
                  )}
                  {reportType === 'category' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{item.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.percentage}%</td>
                    </>
                  )}
                  {reportType === 'wallet' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.wallet}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{item.balance.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">₹{item.income.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">₹{item.expense.toLocaleString()}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainReportTest;