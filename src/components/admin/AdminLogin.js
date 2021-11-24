import React from 'react';
import { TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


const AdminLogin = (props) => {
  console.log(props)

  if (props.auth === true) {
    return <Redirect to='/uploadimage' />
  } 
    
  return (  
    <React.Fragment>
      <h2>Login</h2>
      <p>Please login in to upload images to this website:</p>
      <form onSubmit = {(e) => props.onSignIn(e)}>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => props.onEmailChange(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" type="password"variant="outlined" onChange={(e) => props.onPasswordChange(e.target.value)}/>
        <input type="submit" value="Login"/>
      </form>
      <p>No sign-up options available.</p>
    </React.Fragment>
  );

  
}

AdminLogin.propTypes = {
  onSignIn: PropTypes.func
}
 
export default AdminLogin;