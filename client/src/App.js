import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/profile/:username" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
