import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from 'react-icons/fi'

function Card({data}) {
    const{ id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,description }=data
  return (
        <section className='card'>
            <Link to={`/job-detail/${id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt="company logo" className='w-20 h-20 rounded-full'/>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                        <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
                        <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
                    </div>
                    <p className='text-base text-primary/70'>{description}</p>
                </div>
            </Link>
        </section>
  )
}

export default Card