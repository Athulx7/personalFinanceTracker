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
import MainMessgaeTest from './components/messages/MainMessgaeTest'
import MainMessage from './components/messages/MainMessage'
import MessageList from './components/messages/MessageList'
import MessageNew from './components/messages/MessageNew'
import MessageThread from './components/messages/MessageThread'
import MainReportTest from './components/reports/MainReportTest'
import MainReport from './components/reports/MainReport'
import MainSettingsTest from './components/settings/MainSettingsTest'
import MainSettings from './components/settings/MainSettings'
import MainFeedBackTest from './components/feedBack/MainFeedBackTest'
import MainFeedBack from './components/feedBack/MainFeedBack'
import HelpMain from './components/help/HelpMain'

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
        <Route path='activity_income' element={<MainActivityIncome />} />
        {/* <Route path='activity_income' element = {<MainIncomeTeest />} /> */}
        {/* <Route path='messages' element={<MainMessgaeTest />} /> */}
        <Route path='messages' element={<MainMessage />} >
          <Route index element={<MessageList />} />
          <Route path='new' element={<MessageNew />} />
          <Route path=':id' element={<MessageThread />} />
        </Route>

        <Route path='reports' element = {<MainReport />} />
        {/* <Route path='reports' element = {<MainReportTest />} /> */}
        {/* <Route path='settings' element = {<MainSettingsTest />} /> */}
        <Route path='settings' element = {<MainSettings />} />

        {/* <Route path='feedback' element = {<MainFeedBackTest />} /> */}
        <Route path='feedback' element = {<MainFeedBack />} />
        <Route path='help' element = {<HelpMain />} />

      </Route> 

    </Routes>
    </>
  )
}

export default App
