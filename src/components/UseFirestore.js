import React  from "react";
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import GalleryControl from "./GalleryControl";

const UseFirestore = () => {

    const comicRef = useFirestore().collection('allComics');
    const { status, data } = useFirestoreCollectionData(comicRef);

    if (status === 'loading') {
        return (
          <div>
            loading...
          </div>
        )
    } else {
        return (
            <React.Fragment>
                <GalleryControl status={status} data={data}/>
            </React.Fragment>
        )
    }
}

export default UseFirestore;