import React, { useState } from 'react';
import SideHeader from '../components/headerFooter/SideHeader';
import TopHeader from '../components/headerFooter/TopHeader';
import { Outlet } from 'react-router-dom';

function HomeDashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
 
      <div className="h-14 bg-white flex items-center sticky top-0 z-50 border-b border-gray-200">
        <button
          className="md:hidden ml-4 p-2 rounded-md text-gray-500 hover:bg-gray-100"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <TopHeader />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className={`
          ${sidebarOpen ? 'w-64' : 'w-20'} 
          border-r-2 border-gray-200 
          bg-white
          transition-all duration-300 ease-in-out
          fixed md:relative 
          h-[calc(100vh-3.5rem)] 
          z-40
          overflow-y-auto
        `}>
          <SideHeader collapsed={!sidebarOpen} />
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-white/40 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />

        )}

        <div className={`
          flex-1 p-6 bg-gray-50 overflow-y-auto h-[calc(100vh-3.5rem)] 
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'ml-64 md:ml-0' : 'ml-20 md:ml-0'}
        `}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeDashBoard;