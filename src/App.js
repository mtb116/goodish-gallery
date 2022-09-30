import React from "react";
import "firebase/auth"
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import UseFirestore from "./components/UseFirestore";
import { getFirestore } from 'firebase/firestore';
import {
  FirestoreProvider,
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