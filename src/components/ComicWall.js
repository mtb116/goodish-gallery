import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Link } from "react-router-dom";
import { Grid, Card, CardHeader, CardActionArea, CardContent } from '@material-ui/core';

const ComicWall = () => {

  const comicRef = useFirestore().collection('allComics');

  const { status, data } = useFirestoreCollectionData(comicRef);

  const style = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  
  if (status === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return ( 
    <div>
      <h1>All the Comics Stuff</h1>
      <Grid container spacing={3}>
        {data.map((comic) => (
          <Grid item xs={4}>
            <CardActionArea>
              <Link to={comic.route}>
                <Card>
                  <CardHeader title={comic.title}/>
                  <div>
                    <img src={comic.titleUrl} style={style}/>
                  </div>
                  <CardContent>
                    {comic.description}
                  </CardContent>
                </Card>
              </Link>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </div>
    );
  }

}
 
export default ComicWall;