import React from "react";
import "./styles/index.scss";
import DataContextProvider from "./context/dataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/signIn";

const App = () => {
  return (
    <DataContextProvider>
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
          </Switch>
        </Router>
      </div>
    </DataContextProvider>
  );
};

export default App;
