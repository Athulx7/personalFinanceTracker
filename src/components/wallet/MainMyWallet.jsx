// import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faWallet, faCreditCard, faEdit, faMobileAlt, faMoneyBillAlt, faPlus, faTrashAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AddViewWalletSection from './AddViewWalletSection'
import SelectedWalletTable from './SelectedWalletTable'
import '../../basicComponents/basicCss/comCss.css'
import { AddNewWalletAPI } from '../../Services/ApiCall'
import LoadingSpinner from '../../basicComponents/LoadingSpinner'
import CommonStatusPopUp from '../../basicComponents/CommonStatusPopUp'

function MainMyWallet() {
    const token = sessionStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [openStatusPopUp, setOpenStatusPopUp] = useState({
        isOpen: false,
        type: 'success',
        body: ''
    })
    const walletTypes = [
        { value: 'bank', label: 'Bank Account', icon: faUniversity },
        { value: 'credit', label: 'Credit Card', icon: faCreditCard },
        { value: 'cash', label: 'Cash', icon: faMoneyBillAlt },
        { value: 'digital', label: 'Digital Wallet', icon: faMobileAlt }
    ];
    const [newWallet, setNewWallet] = useState({
        name: '',
        type: 'bank',
        balance: '',
        currency: '₹'
    });

    const addNewWalletApiCAll = async () => {
        setIsLoading(true)
        try {
            const reqHeader = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
            const responce = await AddNewWalletAPI(newWallet, reqHeader)
            // console.log(responce.status)
            if (responce.status === 201) {
                setOpenStatusPopUp({
                    isOpen: true,
                    type: 'success',
                    body: 'New wallet added successfully!'
                })
                setIsModalOpen(false)
                setNewWallet({
                    name: '',
                    type: 'bank',
                    balance: '',
                    currency: '₹'
                })
            }
            else if (responce.status === 400) {
                setOpenStatusPopUp({
                    isOpen: true,
                    type: 'error',
                    body: responce.response.data.message || 'Wallet with this name already exists.'
                })
            }
            else {
                setOpenStatusPopUp({
                    isOpen: true,
                    type: 'error',
                    body: 'An unexpected error occurred. Please try again later.'
                })
            }
        }
        catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }
    
    return (
        <>
            <div className=' overflow-y h-[80vh]'>
                <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
                    <FontAwesomeIcon icon={faWallet} className="w-5 text-center text-indigo-500" />
                    <span className="ms-3">My Wallet</span>
                </div>

                <div>
                    <AddViewWalletSection
                        token={token}
                        walletTypes={walletTypes}
                        newWallet={newWallet}
                        addNewWalletApiCAll={addNewWalletApiCAll}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        setNewWallet={setNewWallet}
                    />
                </div>

                <div className=''>
                    <SelectedWalletTable />
                </div>
            </div>

            {isLoading && (<LoadingSpinner />)}

            {
                openStatusPopUp.isOpen &&
                <CommonStatusPopUp
                    isOpen={openStatusPopUp.isOpen}
                    onClose={() => setOpenStatusPopUp(prev => ({ ...prev, isOpen: false }))}
                    type={openStatusPopUp.type}
                    body={openStatusPopUp.body}
                />
            }
        </>
    )
}

export default MainMyWallet
