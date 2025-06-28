import React from 'react'
import CommonTable from '../../basicComponents/commonTable'

function SelectedWalletTable() {

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
        <div className="pb-4">
            <CommonTable 
                columns={columns}
                data={walletData}
                customHeader = {'Wallet Nmae transactions'}
            />
        </div>
    )
}

export default SelectedWalletTable