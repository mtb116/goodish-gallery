import { React, Component } from "react";
import ReactJson from "react-json-view";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: 'All is working.',
      info: 'All is working.' 
    };
  }

  componentDidCatch(error, info) {    
    this.setState({ hasError: true, error: error, info: info });
  }

  render() {
    if (this.state.hasError) {
      return ( 
        <div>
          <h1>Something went wrong.</h1>
          <h2>womp womp</h2>
          <div>
            <p>You can let me know about it at morriebird ----at---- the googlemails.com</p>
            <p>or</p>
            <a href='/'>Be on your way and return to Home</a>
          </div>
          <div style={{outlineStyle: 'dotted',
                       outlineColor: 'red'
                     }}
          >
            <p>I need to know this error message and the url that brought you here:</p>
            <p style={{backgroundColor: '#dfc8d1'}}>Error message: {this.state.error.message}</p>
            <p>This is not important but makes me look smart.</p>
            <ReactJson src={this.state.info}/>
          </div>
        </div>
       );
    } 
    return this.props.children;
  }
}

 
export default ErrorBoundary;