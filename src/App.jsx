import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import HomeDashBoard from './containers/HomeDashBoard'
import MainDash from './components/home/MainDash'
import MainWallet from './components/wallet/MainWallet'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} /> 

      <Route path='/home' element={<HomeDashBoard />} >
        <Route index element={<MainDash />} />
        <Route path='wallet' element={<MainWallet />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
