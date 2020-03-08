import React, { useContext } from "react";
import { DataContext } from "../context/dataContext";
import bg from "../assets/images/Main.jpg";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Products = () => {
  const { path } = useRouteMatch();
  const { categories } = useContext(DataContext);

  return (
    <React.Fragment>
      <div className="products--hero">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="products--hero-bg"
        >
          <div className="products--hero-over">
            <span>SHOP/SURFBOARDS</span>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <ProductsList categories={categories} />
        </Route>
        <Route path={`${path}/:slugId`}>
          <ProductsList categories={categories} filtred={true} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Products;

const ProductsList = ({ categories, filtred }) => {
  const { slugId } = useParams();
  const listMapper = categories.map(category => {
    const { id, name, products } = category;
    const sublistMapper = products.map(product => (
      <span key={`st${product.refrence}`}>{product.prodName}</span>
    ));
    return (
      <li key={`listc${id}`}>
        <Link to={`/shop/surfbards/${id}`}>{name}</Link>
        {id === slugId && (
          <div className="products--main-sublist">{sublistMapper}</div>
        )}
      </li>
    );
  });

  const renderLogic = !!filtred
    ? categories.filter(item => item.id === slugId)
    : categories;
  const render = renderLogic.map(category => {
    const { id, name, products } = category;
    const productsDetails = products.map(product => (
      <div key={product.refrence} className="products--item">
        <img src={product.image} alt="" />
        <div className="products-item-flex">
          <span>{product.prodName}</span>
          <span>{product.price}</span>
        </div>
      </div>
    ));
    return (
      <div key={`listp${id}`} className="products--card-wrapper">
        <h3>{name}</h3>
        <div className="products--grid">{productsDetails}</div>
      </div>
    );
  });

  return (
    <div className="products--main">
      <div className="products-main-aside">
        <h3>SHORTCUTS</h3>
        <ul>
          <li>
            <Link to="/shop/surfbards/">ALL</Link>
          </li>
          {listMapper}
        </ul>
        <p>
          Surfboards manufactured and sold by Patagonia are guaranteed for
          quality and performance. We stand by our surfboards and aim to produce
          the highest quality products. Our surfboards are made for surfers, by
          surfers.
        </p>
      </div>
      <div className="products--main-store">{render}</div>
    </div>
  );
};
