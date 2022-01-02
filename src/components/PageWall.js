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

const PageWall = (props) => {

  const {
    pages
  } = props
  console.log('line 18: ' + pages)

  const [pageList, setPages] = useState(["fill"]);


  const pageRef = useFirestore()
  .collection('allComics')
  .doc(props.pages)
  .collection('pages');
  
  const { status, data } = useFirestoreCollectionData(pageRef);
  
  
  useEffect(() => {
    setPages(data)
    console.log(data)
  }, [pages])

  
  console.log(pageList)
  let { path, url } = useRouteMatch();

  // const refreshPage = (list) => {
  //   if (list !== undefined) {
  //     return list
  //   } else {
  //     console.log(list);
  //     window.location.reload(true);
  //     return list
  //   }
  // }

  // const realList = refreshPage(pageList)
  
  if (status === 'loading' || pageList === undefined) {
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
          <Page pages={pageList} comic={props.pages} pageCollection={pageRef}/>
        </Route>
      </Switch>
      </div>
    )
  }
}
 
export default PageWall;