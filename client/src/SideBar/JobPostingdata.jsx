import React from 'react'
import InputField from '../components/InputField/InputField'

function JobPostingdata({handleChange}) {
    const now=new Date();
    

    const twentyFourHoursAgo=new Date(now  - 24 * 60 * 60 * 1000);
    const sevenDaysAgo=new Date(now  - 7 * 24 * 60 * 60 * 1000);
    const thiryDaysAgo=new Date(now  - 30 * 24 * 60 * 60 * 1000);

    // convert date
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate=sevenDaysAgo.toISOString().slice(0,10);
    const thiryDaysAgoDate=thiryDaysAgo.toISOString().slice(0,10);
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="time"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 Hourse"
          name="time"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="time"
        />
        <InputField
          handleChange={handleChange}
          value={thiryDaysAgoDate}
          title="Last Month"
          name="time"
        />
      </div>
    </div>
  )
}

export default JobPostingdata