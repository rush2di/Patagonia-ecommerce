import React from "react";
import "./styles/index.scss";
import DataContextProvider from "./context/dataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const App = () => {
  return (
    <DataContextProvider>
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </DataContextProvider>
  );
};

export default App;
