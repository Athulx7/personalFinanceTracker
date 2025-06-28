import React, { useState } from 'react';
import CommonDropDown from '../../basicComponents/CommonDropDown';
import CommonDatePicker from '../../basicComponents/CommonDatePicker';
import CommonButton from '../../basicComponents/CommonButton';

function ExpenseSelection() {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWallet, setSelectedWallet] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const monthOptions = [
        { label: 'January', value: '01' },
        { label: 'February', value: '02' },
        { label: 'March', value: '03' },
        { label: 'April', value: '04' },
        { label: 'May', value: '05' },
        { label: 'June', value: '06' },
        { label: 'July', value: '07' },
        { label: 'August', value: '08' },
        { label: 'September', value: '09' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' },
    ];

    const yearOptions = [
        { label: '2023', value: '2023' },
        { label: '2024', value: '2024' },
        { label: '2025', value: '2025' },
    ];

    const categoryOptions = [
        { label: 'Groceries', value: 'groceries' },
        { label: 'Rent', value: 'rent' },
        { label: 'Travel', value: 'travel' },
        { label: 'Utilities', value: 'utilities' },
        { label: 'Entertainment', value: 'entertainment' },
    ];

    const walletOptions = [
        { label: 'SBI Bank', value: 'sbi' },
        { label: 'Cash', value: 'cash' },
        { label: 'Paytm Wallet', value: 'paytm' },
        { label: 'ICICI Bank', value: 'icici' },
        { label: 'HDFC Credit Card', value: 'hdfc' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <CommonDropDown
                options={monthOptions}
                value={selectedMonth}
                onChange={setSelectedMonth}
                placeholder="Select Month"
            />

            <CommonDropDown
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                placeholder="Select Year"
            />

            <CommonDropDown
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select Category"
            />

            <CommonDropDown
                options={walletOptions}
                value={selectedWallet}
                onChange={setSelectedWallet}
                placeholder="Select Wallet"
            />

            <CommonDatePicker
                value={fromDate}
                onChange={(date) => {
                    setFromDate(date);
                    // Reset toDate if it's before the new fromDate
                    if (toDate && new Date(date) > new Date(toDate)) {
                        setToDate(null);
                    }
                }}
                placeholder="Select start date"
            />

            <CommonDatePicker
                value={toDate}
                onChange={setToDate}
                placeholder="Select end date"
                minDate={fromDate}  // Disable dates before fromDate
                disabled={!fromDate} // Disable entirely until fromDate is selected
            />
                
            <CommonButton 
                label='view'
                size='medium'
            />
        </div>
    );
}

export default ExpenseSelection;
