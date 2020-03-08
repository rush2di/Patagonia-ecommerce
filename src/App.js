import React from "react";
import "./styles/index.scss";
import DataContextProvider from "./context/dataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));
const SignIn = React.lazy(() => import("./pages/signIn"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Products = React.lazy(() => import("./pages/products"));

const App = () => {
  return (
    <Router>
      <DataContextProvider>
        <div className="main">
          <React.Suspense
            fallback={
              <div>
                <span>Loading</span>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/shop/surfbards" component={Products} />
            </Switch>
          </React.Suspense>
        </div>
      </DataContextProvider>
    </Router>
  );
};

export default App;
