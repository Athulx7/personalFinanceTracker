import React from 'react'
import CardSection from './CardSection'
import GraphSection from './GraphSection'
function MainDash() {
  const user = JSON.parse(sessionStorage.getItem('user'))

  return (
    <div className=''>
      <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'>
        Welcome Back, <span className='text-indigo-600'>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</span>...
      </div>

      <div>
        <CardSection />
      </div>

      <div className='mt-10'>
        <GraphSection />
      </div>
    </div>
  )
}

export default MainDash