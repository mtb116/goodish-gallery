import { doc } from 'firebase/firestore';
import {
  useFirestoreDocData,
  useFirestore,
} from 'reactfire';


function TipJar() {

  const kofiStyle={
    border: '0px',
    height: '36px',
  }

  const db = useFirestore();

  const docRef = doc(db, 'allPayment', 'ko-fi');
  const {status: kofiStatus, data: kofi} = useFirestoreDocData(docRef);

  if(kofiStatus === 'loading') {
    return (
      <div></div>
    )
  } else {
    return (
      <div style={{marginTop: '15px', textAlign: 'center'}}>
        <a href={kofi.url} target='_blank' rel='noreferrer'>
          <img height='36' style={kofiStyle} src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
        </a>
      </div>
    )
  }
}

export default TipJar;