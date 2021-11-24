import React, { Component } from "react";
import Checkbox from "./Checkbox";

class CheckboxList extends Component {
  render() {
    //object passed as prob converted to array
    let checkboxArray = Object.entries(this.props.checkboxObj);
    return (
      <div className="row" id="CheckboxList">
        {checkboxArray.map((checkbox) => (
          <Checkbox
            label={checkbox[0]}
            isSelected={checkbox[1]}
            onCheckboxChange={this.props.onCheckboxChange}
            key={checkbox}
          />
        ))}
      </div>
    );
  }
}

export default CheckboxList;