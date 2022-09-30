import React from 'react';
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

    const comicRef = doc(db, 'allComics', 'UiU09n8V6AaOnl3qboo0');
    const {status: comicStatus, data: comic} = useFirestoreDocData(comicRef)

    if (comicsStatus === 'loading' || comicStatus === 'loading') {
        return (
            <div>
                loading...
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <GetCollection comics={comics} comicID={comic.NO_ID_FIELD}/>
            </React.Fragment>
        )
    }
}

export default UseFirestore;