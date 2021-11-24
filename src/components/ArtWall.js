import React, { useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Grid, Card, CardMedia, useMediaQuery } from '@material-ui/core';
import { CardActionArea, Collapse, Switch, FormControlLabel, Modal, Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const ArtWall = () => {


  const burritoRef = useFirestore()
  .collection('allImages')

  const { status, data } = useFirestoreCollectionData(burritoRef);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      //adjust media box in card
      height: 340,
    },
  });

  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '86%',
    maxHeight: '86vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  const useImageStyles = makeStyles({
    root: {
      width: 'auto',
      maxWidth: '100%',
    }
  });

  const classes = useStyles();
  const classes2 = useImageStyles();
  const matches = useMediaQuery('(min-width:800px)');

  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [focusImg, setFocusImg] = useState("no image selected");

  console.log(focusImg)

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleToggle = (image) => {
    setFocusImg(image)
    setToggle((toggle) => !toggle)
  }
  
  if (status === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    if(!matches) {
      return (
        <div className={classes.root}>
          <Grid container spacing={1}>
            {data.map((image) => (
            <Grid item xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    component="img"
                    image={image.imgUrl}
                    title={image.name}
                    />
                  </CardActionArea>
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                </Card>
            </Grid>
            ))}
          </Grid>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <Grid container spacing={1}>
            {data.map((image) => (
            <Grid item 
            xs={image.tags.banner ? 6 : 3 } 
            key={image.NO_ID_FIELD}
            >
              <Card >
                <CardActionArea onClick={() => handleToggle(image) }>
                  <CardMedia
                  className={classes.media}
                  component="img"
                  image={image.imgUrl}
                  title={image.name}
                  /> 
                </CardActionArea>
                <Collapse in={checked}>
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                </Collapse>
              </Card>
            </Grid>
            ))}
          </Grid>

          <Modal
            open={toggle}
            onClose={() => setToggle(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <img src={focusImg.imgUrl} className={classes2.root}/>
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                <p>Hello hello this is the title of the focus image: {focusImg.name}</p>
              </Typography>
            </Box>
          </Modal>

        </div>
      )
    }
  }
}

export default ArtWall