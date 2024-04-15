import React from 'react'
import InputField from '../components/InputField/InputField'

function WorkExperience({handleChange}) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="experience"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>
        <InputField
          handleChange={handleChange}
          value="Intership"
          title="Intership"
          name="experience"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="experience"
        />
      </div>
    </div>
  )
}

export default WorkExperience