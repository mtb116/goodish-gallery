import { useFirestore, useFirestoreCollectionData } from 'reactfire';


const ArtWall = () => {

  const burritoRef = useFirestore()
  .collection('allImages')

  const { status, data } = useFirestoreCollectionData(burritoRef);

  console.log(status)
  console.log(data)

  return true

}

export default ArtWall