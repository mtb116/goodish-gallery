import { collection } from 'firebase/firestore';
import {
  useFirestoreCollectionData,
  useFirestore,
} from 'reactfire';

function SocialMedia() {

  const mediaStyle = {
    marginTop: '15px',
    padding: '5px',
    outlineStyle: 'double',
    outlineColor: 'white'
  }

  const linkStyle = {
    color: 'inherit',
  }

  const db = useFirestore();
    
  const mediaCollection = collection(db, 'allMedia');
  const {status: mediaStatus, data: media} = useFirestoreCollectionData(mediaCollection);


  if (mediaStatus === 'loading') {
    return (
      <div>
        loading...
      </div>
    )
  } else {

    const links = media.map((link) => (
      <p><a href={link.url} style={linkStyle}>{link.NO_ID_FIELD}</a></p>
    ))

    return (
      <div style={mediaStyle}>
        <p>Find me out there</p>
        {links}
      </div>
    )
  }
  
  }

export default SocialMedia;