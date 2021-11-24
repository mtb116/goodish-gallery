import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <div className="col-3">
      <label id="items">
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={event => onCheckboxChange(event.target.name)}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;