import { useFirestore, useFirestoreCollectionData} from 'reactfire';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"
import PageDisplay from './PageDisplay';

const Page = (props) => {

  const pageRef = useFirestore()
  .collection('allComics')
  .doc(props.pages)
  .collection('pages');

  const { status, data } = useFirestoreCollectionData(pageRef);
  console.log(data)
  // Can't setPage(data) bc of infinate redender

  let { path, url } = useRouteMatch();

  if (status === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        {data.map((page) => (
          <Link to={`${url}/${page.page}`}>
            <p>{page.name}</p>
          </Link>
        ))}
        <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:pageNum`}>
          <PageDisplay pages={data} comic={props.pages} pageCollection={pageRef}/>
        </Route>
      </Switch>
      </div>
    )
  }
}
 
export default Page;