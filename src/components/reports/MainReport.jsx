import { faDownload, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReportSelection from './ReportSelection'
import ReportView from './ReportView';

function MainReport() {
      const [chartType, setChartType] = useState('bar');
    
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='flex items-center justify-between'>
                    <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                        <FontAwesomeIcon icon={faFile} className="w-5 text-center text-indigo-500" />
                        <span className="ms-3">Reports</span>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            onClick={() => alert('pdf')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Export PDF
                        </button>
                        <button
                            onClick={() => alert('csv')}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Export CSV
                        </button>
                    </div>
                </div>

                <div>
                    <ReportSelection />
                </div>

                <div>
                    <ReportView chartType={chartType}/>
                </div>
            </div>
        </>
    )
}

export default MainReport
