import { React, Component } from "react";
import firebase from "firebase/app"
import "firebase/auth"
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLogin from "./components/admin/AdminLogin";
import ArtWall from "./components/ArtWall";
import Comic from './components/Comic';
import ComicWall from './components/ComicWall';
import NoMatch from './components/NoMatch';
import UploadToFirebase from './components/admin/UploadToFirebase';
import { Button, Typography } from '@mui/material';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        auth: false
      }
      this.signInWithEmailPassword = this.signInWithEmailPassword.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
    } 

  signInWithEmailPassword(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    console.log(this.state)

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ auth: true});
    })
    .catch((error) => {
      this.setState({ auth: false })
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  handleEmailChange(email) {
    this.setState({ email: email });
  }

  handlePasswordChange(password) {
    this.setState({ password: password });
  }
  

  render() { 
    return (  
      <BrowserRouter>
        <div className='secondary'>
          <Button style={{padding: '5px'}}>
            <Link to={'/'}>
              <Typography variant='h6'>Home</Typography>
            </Link>
          </Button>
          <Button style={{padding: '5px'}}>
            <Link to={'/comics'}>
              <Typography variant='h6'>Comics</Typography>
            </Link>
          </Button>
        </div>
        <Switch>
          <Route path="/login">
            <AdminLogin onSignIn={this.signInWithEmailPassword} onEmailChange={this.handleEmailChange} onPasswordChange={this.handlePasswordChange} auth={this.state.auth} />
          </Route>
          <PrivateRoute path="/uploadimage" auth={this.state.auth}>
            <UploadToFirebase />
          </PrivateRoute>
          <Route exact path="/">
            <ArtWall/>
          </Route>
          <Route path='/comics'>
            <ComicWall/>
          </Route>
          <Route path='/:id' children={<Comic/>} />
          <Route path='*'>
            <NoMatch/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;