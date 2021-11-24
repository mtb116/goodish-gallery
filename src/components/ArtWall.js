import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Grid, Card, CardMedia, CardActionArea, useMediaQuery } from '@material-ui/core';
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
  
  const classes = useStyles();

  const matches = useMediaQuery('(min-width:800px)')
  
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
          <Grid container spacing={1}>
            {data.map((image) => (
            <Grid item xs={image.tags.banner ? 6 : 3 }>
                <Card>
                  <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={image.imgUrl}
                    title={image.name}
                    /> 
                    <h3>{image.name}</h3>
                    <p>{image.description}</p>
                  </CardActionArea>
                </Card>
            </Grid>
            ))}
          </Grid>
        </div>
      )
    }
  }
}

export default ArtWall