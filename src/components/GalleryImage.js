function GalleryImage(props) {
    
    const containImg = {
      width: '100%',
      height: props.imgHeight,
      objectFit: props.objectFit,
    }

    return (
    <div>
      <img src={props.url} style={containImg} alt={""}/>
    </div>
  )
}

export default GalleryImage;