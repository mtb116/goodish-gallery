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

    // https://stackoverflow.com/questions/70569588/very-high-number-of-reads-in-firestore-database-in-my-react-project
    // // maybe some way of using UseEffect to limit renders

    // this is the actual call to the firebase. the next line is just translating it
    const comicCollection = collection(db, 'allComics');


    const {status: comicsStatus, data: comics} = useFirestoreCollectionData(comicCollection);

    // default state is the first comic ID because it needs valid info even if is not being rendered the component is still being mounted.
    const [comicID, setComic] = useState('UiU09n8V6AaOnl3qboo0')

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