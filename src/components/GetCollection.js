import React from 'react';
import { collection } from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import GalleryControl from './GalleryControl';


function GetCollection(props) {
    const db = useFirestore();
    
    const chapterCollection = collection(db, 'allComics', props.comicID, 'chapters');
    const {status: chpStatus, data: chapters } = useFirestoreCollectionData(chapterCollection);

    const pageCollection = collection(db, 'allComics', props.comicID, 'pages');
    const {status: pageStatus, data: pages } = useFirestoreCollectionData(pageCollection);

    if (chpStatus === 'loading' || pageStatus === 'loading') {
        return (
            <div>
                ..getCollection is loading
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <GalleryControl comics={props.comics} chapters={chapters} pages={pages} />
            </React.Fragment>
        )
    }
}

export default GetCollection;