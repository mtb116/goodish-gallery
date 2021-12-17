import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Comic = () => {

  const comicRef = useFirestore().collection('allComics');

  const { status, data } = useFirestoreCollectionData(comicRef);

  
  if (status === 'loading') {
    console.log(status)
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return ( 
    <div>
      <h1>Comics Page</h1>
      {data.map((comic) => (
        <div>
          <p>{comic.title}</p>
          <img src={comic.titleUrl}/>
          <p>{comic.description}</p>
        </div>
      ))}
    </div> );
  }

}
 
export default Comic;

// display an image of the comic with a name below