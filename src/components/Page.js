import PageButtonGroup from './PageButtonGroup'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const Page = (props) => {

  const {
    pages
  } = props

  let { pageNum, id } = useParams();

  const pageArr = pages.filter(page => page.page == pageNum);
  const page = pageArr[0]
  const pagelatest = pages.sort((a, b) => (a.page > b.page) ? -1 : 1)[0]

  const makeCenter = makeStyles({
    content: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }
  });

  const center = makeCenter();

  return ( 
    <div className={center.content}>
      <div className={center.content}>
        <PageButtonGroup id={id} pageNum={parseInt(pageNum)} latest={pagelatest.page}/>
      </div>
      <img src={page.pageUrl} alt=''/>
      <div className={center.content}>
        <PageButtonGroup id={id} pageNum={parseInt(pageNum)} latest={pagelatest.page}/>
      </div>
    </div>

  );
}
 
export default Page;