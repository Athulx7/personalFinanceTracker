import React from 'react'
import SideHeader from '../components/headerFooter/SideHeader'
import TopHeader from '../components/headerFooter/TopHeader'
import { Outlet } from 'react-router-dom'

function HomeDashBoard() {
  return (
    <>

     <div className="flex flex-col min-h-screen">

      <div className="h-14 bg-white flex items-center">
        <TopHeader />
      </div>

      <div className="flex flex-1">
       <div className="w-64 border-r-2 border-gray-200">
        <SideHeader />
      </div>

        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeDashBoard
