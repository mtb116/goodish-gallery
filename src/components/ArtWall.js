import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Grid, Card, CardMedia } from '@material-ui/core';
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
      height: 340,
    },
  });
  
  const classes = useStyles();
  
  if (status === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          {data.map((image) => (
          <Grid item xs={image.tags.banner ? 6 : 3 }>
              <Card>
                <CardMedia
                className={classes.media}
                image={image.imgUrl}
                title={image.name}
                /> 
              </Card>
          </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default ArtWall