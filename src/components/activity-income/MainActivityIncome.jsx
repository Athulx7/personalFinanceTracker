import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import IncomeSelection from './IncomeSelection'
import IncomeTableView from './IncomeTableView'

function MainActivityIncome() {
  return (
    <>
      <div className=' overflow-y h-[80vh]'>
        <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
          <FontAwesomeIcon icon={faRightLeft} className="w-5 text-center text-indigo-500" />
          <span className="ms-3">Activity - Income</span>
        </div>

        <div>
          <IncomeSelection />
        </div>

        <div className=''>
          <IncomeTableView />
        </div>
      </div>
    </>
  )
}

export default MainActivityIncome