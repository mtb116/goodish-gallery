import { React, Component } from "react";
import "firebase/auth"
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { Button, Typography } from '@mui/material';
import UseFirestore from "./components/UseFirestore";
import { doc, getFirestore } from 'firebase/firestore';
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp
} from 'reactfire';

function App() {

    const firestoreInstance = getFirestore(useFirebaseApp());
    
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FirestoreProvider sdk={firestoreInstance}>
              <UseFirestore/>
            </FirestoreProvider>
          </Route>
          <Route path='*'>
            <h2>You took a wrong turn!</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    );

}
 
export default App;