import React, { Component } from "react";
import UploadImage from "./UploadImage";
import ImageForm from "./ImageForm";

class UploadFirebase extends Component {
    state = {
      imgUrl: "",
      name: "",
      description: "",
      date: "",
      tags: { commission: false, fanart: false, mature: false, banner: false, screenshot: false},
      other: []
    };

  handleImageUrl = (url) => {
    this.setState({ imgUrl: url });
  };

  handleImageName = (name) => {
    this.setState({ name });
  };

  handleImageDescription = (desc) => {
    this.setState({ description: desc });
  };

  handleCheckboxChange = (name) => {
    let tags = this.state.tags;
    for (var key in tags) {
      if (key === name) {
        tags[key] = !tags[key];
      }
    }
    this.setState({ tags });
  };

  handleDate = (date) => {
    this.setState({ date });
  };

  handleOther = (other) => {
    let newArray = other.split(", ");
    this.setState({other: [...newArray]});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ImageForm
          onImageNameChange={this.handleImageName}
          onImageDescriptionChange={this.handleImageDescription}
          onCheckboxChange={this.handleCheckboxChange}
          onDateChange={this.handleDate}
          onOtherChange={this.handleOther}
          imageInfo={this.state}
        />
        <UploadImage state={this.state} onDownloadURL={this.handleImageUrl} />
      </div>
    );
  }
}

export default UploadFirebase;