import React from "react";
import InputField from "../components/InputField/InputField";

function Location({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="Colombo"
          title="Colombo"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Millennium City"
          title="Millennium City"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Pannipitiya"
          title="Pannipitiya"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Gampaha"
          title="Gampaha"
          name="location"
        />
      </div>
    </div>
  );
}

export default Location;
