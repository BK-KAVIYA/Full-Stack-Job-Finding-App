import React from 'react'
import Button from './Button'
import InputField from '../components/InputField/InputField'

function Salary({handleChange,handleClick}) {
  return (
    <div className='mb-4'>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div>
            <Button onClickHandler={handleClick} value='' title='Hourly'/>
            <Button onClickHandler={handleClick} value='Monthly' title='Monthly'/>
            <Button onClickHandler={handleClick} value='Yearly' title='Yearly'/>
        </div>
        <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="salary"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="<30000k"
          name="salary"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="<50000k"
          name="salary"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="<80000k"
          name="salary"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="<100000k"
          name="salary"
        />
        </div>
    </div>
  )
}

export default Salary