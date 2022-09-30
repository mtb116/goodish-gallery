import React from 'react';
import { collection, orderBy, query } from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import GalleryControl from './GalleryControl';


function GetCollection(props) {
    const db = useFirestore();
    
    //has to be this way because ReactFire is a bunch of hooks and can't use hooks in conditional statements in class components, in a function that is not a custom hook or a react component, in a callback like useEffect
    const chapterCollection = collection(db, 'allComics', props.comicID, 'chapters');
    const {status: chpStatus, data: chapters } = useFirestoreCollectionData(chapterCollection);

    const pageCollection = collection(db, 'allComics', props.comicID, 'pages');
    const pageQuery = query(pageCollection, orderBy('page'))
    const {status: pageStatus, data: pages } = useFirestoreCollectionData(pageQuery);

    if (chpStatus === 'loading' || pageStatus === 'loading') {
        return (
            <div>
                ..getCollection is loading
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <GalleryControl comics={props.comics} chapters={chapters} pages={pages} getComic={props.getComic} />
            </React.Fragment>
        )
    }
}

export default GetCollection;