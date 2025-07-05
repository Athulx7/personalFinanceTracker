import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import HomeDashBoard from './containers/HomeDashBoard'
import MainDash from './components/home/MainDash'
import MainWallet from './components/wallet/MainWallet'
import MainMyWallet from './components/wallet/MainMyWallet'
import MainActiviExpense from './components/activity-expense/MainActiviExpense'
import MainActivityExpence from './components/activity-expense/MainActivityExpence'
import MainActivityIncome from './components/activity-income/MainActivityIncome'
import MainIncomeTeest from './components/activity-income/MainIncomeTeest'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} /> 

      <Route path='/home' element={<HomeDashBoard />} >
        <Route index element={<MainDash />} />
        {/* <Route path='wallet' element={<MainWallet />} /> */}
        <Route path='wallet' element={<MainMyWallet />} />
        <Route path='activity_expence' element={<MainActivityExpence />} />
        {/* <Route path='activity_expence' element={<MainActiviExpense />} /> */}
        {/* <Route path='activity_income' element={<MainActivityIncome />} /> */}
        <Route path='activity_income' element = {<MainIncomeTeest />} />
      </Route> 
    </Routes>
    </>
  )
}

export default App
