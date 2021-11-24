import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({children, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth ? (
        children
        ) : (
          <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

//why don't I need to pass props here? How is routes passing props?