import React from "react";
import { getFirestore } from 'firebase/firestore';
import {
    FirestoreProvider,
    useFirebaseApp
  } from 'reactfire';
  import UseFirestore from "./UseFirestore";

const GetFirestore = (props) => {
    
    //doing this because getFirestore() cannot be called in a class component
    const firestoreInstance = getFirestore(useFirebaseApp());

    return (
      <FirestoreProvider sdk={firestoreInstance}>
        <UseFirestore handleGetStuff={props.handleGetStuff}/>
      </FirestoreProvider>
    )
}

export default GetFirestore;
