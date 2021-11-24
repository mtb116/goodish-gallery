import React from "react";
import CheckboxList from "./CheckboxList";

const ImageInfoForm = (props) => {
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => props.onImageNameChange(e.target.value)}
      ></input>
      <br />
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => props.onImageDescriptionChange(e.target.value)}
      />
      <label>Date</label>
      <input
        type="date"
        onChange={(e) => props.onDateChange(e.target.value)}
      />
      <br />
      <label>Other Tags (Separate by comma)</label>
      <input
        type="text"
        onChange={(e) => props.onOtherChange(e.target.value)}
      />
      <br />
      <CheckboxList
        checkboxObj={props.imageInfo.tags}
        onCheckboxChange={props.onCheckboxChange}
      />
      <br />
      <img src={props.imageInfo.imgUrl} alt="to be uploaded" />
    </div>
  );
};

export default ImageInfoForm;