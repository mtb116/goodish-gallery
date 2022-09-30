function GalleryDescription(props) {
  const descriptionStyle = {
    width: props.textWidth,
    margin: 'auto'
  }
    return (
      <div>
        <p style={descriptionStyle}>{props.description}</p>
      </div>
    )
  }

export default GalleryDescription;