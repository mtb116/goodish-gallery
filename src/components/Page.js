import React, { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData} from 'reactfire';
import { useParams } from "react-router-dom"


const Page = (props) => {

  const {
    pages
  } = props

  let { pageNum } = useParams();

  const pageArr = pages.filter(page => page.page == pageNum);
  const page = pageArr[0]
  console.log(page)

  return ( 
    <div>
      <img src={page.pageUrl}/>
    </div>

  );
}
 
export default Page;