import { collection, addDoc } from 'firebase/firestore';
import { useFirestore } from 'reactfire';

function NewsLetterSignUp(props) {

    const db = useFirestore();

    const handleClick = () => {
      let email = window.prompt("I'll only ever use this email to notify you when the next chapter of this comic is ready to read. \n\n Write your email here please!")
      
      if (email === null) {
        window.alert("Hey that's okay. You don't need to give me your email. I just appreicate you stopping by.")
      } else if (email === "") {
        window.alert("I didn't get an email. You gotta fill out the box.")
      } else {
        let emailCheck = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (emailCheck === null) {
          window.alert("Please enter a valid email! \n\n I'm one person here trying to make this thing run.")
        } else {
          addDoc(collection(db, 'allComics', props.comicID, 'readers'), {
            email: email
          })
          window.alert("Thank you! \n\n I've added your email to the list.")
        }
      }
    }

    const newsStyle = {
      padding: '5px',
      textAlign: 'center',
      outlineStyle: 'double',
      outlineColor: 'white'
    }

    if (props.visible === 'cover') {
      return (
        <div></div>
      )
    } else {
      return (
        <div style ={newsStyle}>
          <p>Be notified when the next chapter is out.</p>
          <button onClick={() => handleClick()} style={{color: 'inherit', backgroundColor: 'inherit'}}>Add my email</button>
        </div>
      )
    }

  }

export default NewsLetterSignUp;