import React, { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData} from 'reactfire';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"
import Page from './Page';
import { db } from '../firebase';

const PageWall = (props) => {

  const {
    pages
  } = props

  const [pageList, setPages] = useState('loading');

  useEffect(() => {
    let pageList = [];
    db.collection('allComics').doc(pages).collection('pages')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        pageList.push(doc.data());
      });
      setPages(pageList)
    })
    .catch((error) => {
      console.log('error in PageWall: ' + error)
    })

  }, [pages])
  
  let { path, url } = useRouteMatch();
  
  if (pageList === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        {pageList.map((page) => (
          // need to sort from 1 ... num and list from left to right
          <Link to={`${url}/${page.page}`}>
            <p>{page.page}</p>
          </Link>
        ))}
        <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:pageNum`}>
          <Page pages={pageList} />
        </Route>
      </Switch>
      </div>
    )
  }
}
 
export default PageWall;