import React from "react";
import "./styles/index.scss";
import DataContextProvider from "./context/dataContext";
import Spinner from "./components/spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));
const SignIn = React.lazy(() => import("./pages/signIn"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const Products = React.lazy(() => import("./pages/products"));
const Product = React.lazy(() => import("./pages/product"));
const Cart = React.lazy(() => import("./pages/cart"));
const About = React.lazy(() => import("./pages/about"));

const App = () => {
  return (
    <Router>
      <DataContextProvider>
        <div className="main">
          <React.Suspense fallback={<Spinner isFallback={true} />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/shop/surfboards" component={Products} />
              <Route path="/shop/surfboard/:ref" component={Product} />
              <Route path="/user/cart" component={Cart} />
              <Route path="/about" component={About} />
            </Switch>
          </React.Suspense>
        </div>
      </DataContextProvider>
    </Router>
  );
};

export default App;
