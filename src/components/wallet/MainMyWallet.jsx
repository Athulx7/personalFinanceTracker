import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddViewWalletSection from './AddViewWalletSection'
import SelectedWalletTable from './SelectedWalletTable'
import '../../basicComponents/basicCss/comCss.css'

function MainMyWallet() {
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faWallet} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">My Wallet</span>
                </div>

                <div>
                    <AddViewWalletSection />
                </div>

                <div className=''>
                    <SelectedWalletTable />
                </div>
            </div>
        </>
    )
}

export default MainMyWallet
