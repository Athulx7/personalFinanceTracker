import React, { useState } from 'react'
import CommonDropDown from '../../basicComponents/CommonDropDown'
import CommonDatePicker from '../../basicComponents/CommonDatePicker';
import CommonButton from '../../basicComponents/CommonButton';

function ReportSelection() {
    const [selectedMonth, setSelectedMonth] = useState('');
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

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
                <CommonDropDown
                    options={monthOptions}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    placeholder="Select Month"
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

                <CommonDropDown
                    options={monthOptions}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    placeholder="Select Wallet"
                />

                <CommonDropDown
                    options={monthOptions}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    placeholder="Select Category"
                />

                <CommonButton
                    label='view'
                    size='medium'
                />
            </div>
        </>
    )
}

export default ReportSelection
