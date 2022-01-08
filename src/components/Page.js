import React, { useEffect } from 'react';
import PageButtonGroup from './PageButtonGroup'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const Page = (props) => {

  useEffect(() => {
    window.scrollTo(0,0)
  })

  const { pages } = props

  let { pageNum, id } = useParams();

  const page = pages.filter(page => page.page == pageNum)[0];
  const pagelatest = pages.sort((a, b) => (a.page > b.page) ? -1 : 1)[0]

  const makeCenter = makeStyles({
    content: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    }, 
    text:
    {
      textAlign: 'center'
    }
  });

  const center = makeCenter();

  return ( 
    <div className={center.content}>
      <div className={center.text}>
        <PageButtonGroup id={id} pageNum={parseInt(pageNum)} latest={pagelatest.page}/>
      </div>
      <div>
        <img className={center.img} src={page.pageUrl} alt=''/>
      </div>
      <div className={center.text}>
        <PageButtonGroup id={id} pageNum={parseInt(pageNum)} latest={pagelatest.page}/>
      </div>
    </div>

  );
}
 
export default Page;