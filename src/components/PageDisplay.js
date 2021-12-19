import React, { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData} from 'reactfire';
import { useParams } from "react-router-dom"


const PageDisplay = React.memo((props) => {
  
  const [page, setPage] = useState(null);

  let { pageNum } = useParams();
  
  useFirestore().collection('allComics').doc(props.comic)
  .collection('pages')
  .where('page', '==', parseInt(pageNum))
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc)
      setPage(doc)
    });
  })
  .catch((error) => {
    console.log('Error getting a page from PageDisplay: ', error);
  })

    
  console.log(page)
  return ( 
    <div>
      <p>something</p>
    </div>

  );
});
 
export default PageDisplay;