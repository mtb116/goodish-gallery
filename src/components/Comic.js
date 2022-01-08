import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useFirestore } from 'reactfire';
import PageWall from './PageWall';

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

  if (comicId === null) {
    return (
      <div>
        loading the Comic component...
      </div>
    )
  } else {
    return (
      <div>
        <PageWall pages={comicId}/>
      </div>
    )
  }
}
 
export default Comic;