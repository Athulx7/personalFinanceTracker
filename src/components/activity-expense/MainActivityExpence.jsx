import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ExpenseSelection from './ExpenseSelection'

function MainActivityExpence() {
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">Activity - Expense editBy Thin</span>
                </div>

                <div>
                    <ExpenseSelection />
                </div>

                <div className=''>
                    
                </div>
            </div>
        </>
    )
}

export default MainActivityExpence
