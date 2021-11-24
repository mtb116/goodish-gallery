import React, { useState } from "react";
import { storage, db } from "../../firebase";

const UploadImage = (props) => {
  const [imageAsFile, setImageAsFile] = useState("");

  //gets the image file and sets it as image to local state
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    console.log("event " + image);
    setImageAsFile(() => image);
  };

  const handleFirebaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");

    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            props.onDownloadURL(fireBaseUrl);
          });
      }
    );
  };

  const addImageObjToFirebase = (event) => {
    event.preventDefault();
    return db.collection("allImages").add(props.state);
  };

  return (
    <div>
      <form onSubmit={handleFirebaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <button>upload image to storage</button>
      </form>
      <form onSubmit={addImageObjToFirebase}>
        <button>upload to the real deal!</button>
      </form>
    </div>
  );
};

export default UploadImage;