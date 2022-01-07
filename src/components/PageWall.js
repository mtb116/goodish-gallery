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
      setPages(pageList.sort((a, b) => (a.page > b.page) ? 1 : -1))
    })
    .catch((error) => {
      console.log('error in PageWall: ' + error)
    })

  }, [pages])
  
  let { path, url } = useRouteMatch();

  console.log(pageList)
  
  if (pageList === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        <div>
          {pageList.map((page) => (
            <p style={{display: 'inline', padding: '5px'}}>
              <Link to={`${url}/${page.page}`}>
                {page.page}
              </Link>
            </p>
          ))}
        </div>
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