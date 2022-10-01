import React, { useState } from 'react';
import { collection } from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import GalleryControl from './GalleryControl';


function GetCollection(props) {
    const db = useFirestore();
    
    // has to be this way because ReactFire is a bunch of hooks and can't use hooks in conditional statements in class components, in a function that is not a custom hook or a react component, in a callback like useEffect
    const chapterCollection = collection(db, 'allComics', props.comicID, 'chapters');
    const {status: chpCollectionStatus, data: chapters } = useFirestoreCollectionData(chapterCollection);
    
    // default is first chapter ID of the first comic because it needs valid info when component mounts 
    const [chapterID, setChapter] = useState('bfpDyJQhb1Lj8QVR5yLd');
    const pageCollection = collection(db, 'allComics', props.comicID, 'chapters', chapterID, 'pages');
    const {status: pgCollectionStatus, data: pages} = useFirestoreCollectionData(pageCollection);
    
    if (chpCollectionStatus === 'loading' || pgCollectionStatus === 'loading') {
        return (
            <div>
                ..getCollection is loading
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <GalleryControl comics={props.comics} comicID={props.comicID} chapters={chapters} pages={pages} getComic={props.getComic} getChapter={setChapter} />
            </React.Fragment>
        )
    }
}

export default GetCollection;