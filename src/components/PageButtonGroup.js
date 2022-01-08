import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';



const PageButtonGroup = (props) => {

  const checkPrevious = () => {
    if (props.pageNum === 1) {
      return 1;
    } else {
      return props.pageNum - 1;
    }
  }

  const checkNext = () => {
    if (props.pageNum === props.latest) {
      return props.latest;
    } else {
      return props.pageNum + 1;
    }
  }

  return (     
    <ButtonGroup variant="text" aria-label="outlined button group">
      <Button>
        <Link to={`/${props.id}/${1}`}>first</Link>
      </Button>
      <Button>
        <Link to={`/${props.id}/${checkPrevious()}`}>previous</Link>
      </Button>
      <Button>
        {props.pageNum}
      </Button>
      <Button>
        <Link to={`/${props.id}/${checkNext()}`}>next</Link>
      </Button>
      <Button>
        <Link to={`/${props.id}/${props.latest}`}>latest</Link>
      </Button>
    </ButtonGroup> 
  );
}
 
export default PageButtonGroup;