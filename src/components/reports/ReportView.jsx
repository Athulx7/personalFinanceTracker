import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CommonTable from '../../basicComponents/commonTable'

function ReportView(chartType) {
    const walletData = [
        { id: 1, walletName: 'Main Wallet', balance: '₹50,000', lastTransaction: '2023-05-15', status: 'Active' },
        { id: 2, walletName: 'Savings Wallet', balance: '₹1,20,000', lastTransaction: '2023-05-10', status: 'Active' },
        { id: 3, walletName: 'Travel Wallet', balance: '₹25,000', lastTransaction: '2023-04-28', status: 'Inactive' },
        { id: 4, walletName: 'Investment Wallet', balance: '₹3,50,000', lastTransaction: '2023-05-12', status: 'Active' },
    ]

    const columns = [
        { header: 'Wallet Name', accessor: 'walletName' },
        { header: 'Balance', accessor: 'balance' },
        { header: 'Last Transaction', accessor: 'lastTransaction' },
        { header: 'Status', accessor: 'status' },
    ]
    return (
        <>
            <div className='mt-5'>
                <div className="flex justify-end mb-4">
                    <div className="inline-flex rounded-md shadow-sm">
                        <button
                            onClick={() => alert('bar')}
                            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${chartType === 'bar' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                            Bar Chart
                        </button>
                        <button
                            onClick={() => alert('pie')}
                            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${chartType === 'pie' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <FontAwesomeIcon icon={faChartPie} className="mr-2" />
                            Pie Chart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
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

                    <div>
                        <CommonTable
                            columns={columns}
                            data={walletData}
                            customHeader={'Table Name'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportView
