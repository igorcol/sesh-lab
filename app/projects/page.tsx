

import Navbar from '@/components/navbar'
import ProjectList from '@/components/ProjectList'
import React from 'react'
    
const page = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        
      {/* NAVBAR */}
      <Navbar/>

      <main className='flex-1 container min-w-screen  py-8 px-20'>
        {/* Project list */}
        <ProjectList/>
      </main>

    </div>
  )
}

export default page
