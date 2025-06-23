import React from 'react'
import CardSection from './CardSection'
import GraphSection from './GraphSection'
function MainDash() {
  

  return (
    <div className=''>
      <div className='font-semibold text-xl md:text-2xl text-gray-800 mb-6'> 
        Welcome Back, <span className='text-indigo-600'>User Name</span>...
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