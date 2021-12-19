import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useFirestore } from 'reactfire';
import Page from './Page';

const Comic = () => {

  let { id } = useParams();
  const [comicId, setComicId] = useState(null);

  useFirestore().collection('allComics').where('route', '==', id)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setComicId(doc.id)
    });
  })
  .catch((error) => {
    console.log('Error getting comic pages: ', error);
  })

  console.log("these are from ComicPage " + comicId)
  
  
  if (comicId === null) {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        <Page pages={comicId}/>
      </div>
    )
  }
}
 
export default Comic;