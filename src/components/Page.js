import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core';

const Page = (props) => {

  const {
    pages
  } = props

  let { pageNum } = useParams();

  const pageArr = pages.filter(page => page.page == pageNum);
  const page = pageArr[0]
  console.log(page)

  const makeCenter = makeStyles({
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }
  });

  const center = makeCenter();

  return ( 
    <div>
      <img src={page.pageUrl} alt='' className={center.img}/>
    </div>

  );
}
 
export default Page;