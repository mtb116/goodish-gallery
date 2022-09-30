import React, { useState } from 'react';
import { doc, collection } from 'firebase/firestore';
import {
  useFirestoreCollectionData,
  useFirestoreDocData,
  useFirestore,
} from 'reactfire';
import GetCollection from "./GetCollection";

const UseFirestore = () => {
    
    const db = useFirestore();
    
    const comicCollection = collection(db, 'allComics');
    const {status: comicsStatus, data: comics} = useFirestoreCollectionData(comicCollection);

    const [comicID, setComic] = useState('UiU09n8V6AaOnl3qboo0')

    console.log(comicID)
    const comicRef = doc(db, 'allComics', comicID);
    const {status: comicStatus, data: comic} = useFirestoreDocData(comicRef);

    if (comicsStatus === 'loading' || comicStatus === 'loading') {
        return (
            <div>
                loading...
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <GetCollection comics={comics} comicID={comic.NO_ID_FIELD} getComic={setComic}/>
            </React.Fragment>
        )
    }
}

export default UseFirestore;