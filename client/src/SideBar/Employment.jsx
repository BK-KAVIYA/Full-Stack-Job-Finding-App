import React from 'react'
import InputField from '../components/InputField/InputField'

function Employment({handleChange}) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="employment"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Employment
        </label>
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="employment"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="employment"
        />
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="employment"
        />
      </div>
    </div>
  )
}

export default Employment