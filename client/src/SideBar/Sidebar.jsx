import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingdata from './JobPostingdata'
import WorkExperience from './WorkExperience'
import Employment from './Employment'

function Sidebar({handleChange,handleClick}) {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <JobPostingdata handleChange={handleChange}/>
        <WorkExperience handleChange={handleChange}/>
        <Employment handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar