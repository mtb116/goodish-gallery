import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Page from './Page';

const ComicPage = () => {

  let { id } = useParams();
  const [pages, setPages] = useState(null);

  useFirestore().collection('allComics').where('route', '==', id)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setPages(doc.id)
    });
  })
  .catch((error) => {
    console.log('Error getting comic pages: ', error);
  })
  
  
  if (pages === null) {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div><Page pages={pages}/></div>
    )
  }
}
 
export default ComicPage;

//need to call the subcollection in here
// based on the route url params?