import { Link, useParams, useRouteMatch } from "react-router-dom"
import { makeStyles } from '@material-ui/core';

const Page = (props) => {

  const {
    pages
  } = props

  let { pageNum, id } = useParams();
  let { path, url } = useRouteMatch();
  console.log('path ' + path)
  console.log('url ' + url)
  console.log(id)

  const pageArr = pages.filter(page => page.page == pageNum);
  const page = pageArr[0]
  console.log(page)

  const makeCenter = makeStyles({
    content: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    },
    text: {
      textAlign: 'center'
    }
  });

  const center = makeCenter();

  return ( 
    <div className={center.content}>
      <div>
        <Link to={`/${id}/${parseInt(pageNum) + 1}`}>next page</Link>
        <p className={center.text}>{page.page}</p>
        <Link to={`/${id}/${parseInt(pageNum) - 1}`}>previous page</Link>
      </div>
      <img src={page.pageUrl} alt=''/>
    </div>

  );
}
 
export default Page;