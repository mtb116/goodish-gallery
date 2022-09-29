import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useFirestore, useFirestoreDocData} from 'reactfire';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import Page from './Page';

const PageWall = (props) => {

  const { pages } = props

  const [pageList, setPages] = useState('loading');

  console.log(pageList)

  let { path, url } = useRouteMatch();

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

  const comicRef =  useFirestore().collection('allComics').doc(pages);
  const { status, data } = useFirestoreDocData(comicRef)
  
  if (pageList === 'loading' || status === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        <img style={{display: 'block', 
                     marginLeft: 'auto', 
                     marginRight: 'auto', 
                     width: '50%',
                     paddingBottom: '40px',
                     paddingTop: '25px'
                    }}
             src={data.headerUrl} 
             alt=''
        />
        <Switch>
          <Route exact path={path}>
            <h1 style={{textAlign: 'center'}}>Select a page</h1>
            <div style={{textAlign: 'center', fontSize: '35px'}}>
              {pageList.map((page) => (
                <p style={{display: 'inline', padding: '20px'}} key={page.page}>
                  <Link to={`${url}/${page.page}`}>
                    {page.page}
                  </Link>
                </p>
              ))}
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path={`${path}/:pageNum`}>
            <Page pages={pageList} />
          </Route>
      </Switch>
      </div>
    )
  }
}
 
export default PageWall;