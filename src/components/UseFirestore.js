import React, { useEffect, useState } from 'react';
import { doc, collection, query, where, getFirestore, getDoc } from 'firebase/firestore';
import {
  FirebaseAppProvider,
  useFirestoreCollectionData,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp
} from 'reactfire';
import GalleryControl from "./GalleryControl";

const UseFirestore = () => {
    const db = useFirestore()

    const comicCollection = collection(db, 'allComics');
    // renders all comics in the collection. pass document ID as key. Pass that back here on click
    
    // gets a comic based on the document ID
    // make ID a variable
    const getComic = doc(db, 'allComics', 'UiU09n8V6AaOnl3qboo0')
    const {data: comic} = useFirestoreDocData(getComic)

    const chapterCollection = collection(db, 'allComics', 'UiU09n8V6AaOnl3qboo0', 'chapters');
    const {status, data } = useFirestoreCollectionData(chapterCollection);
    
    if (status === 'loading' ) {
        return (
            <div>
            loading...
          </div>
        )
    } else {
        console.log(data)
        return (
            <React.Fragment>
                <GalleryControl data={data}/>
            </React.Fragment>
        )
    }
}

export default UseFirestore;