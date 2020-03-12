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
  const background = { backgroundImage: `url(${bg})` };

  return (
    <React.Fragment>
      <div className="products--hero">
        <div style={background} className="products--hero-bg">
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

const ProductsList = ({ categories, filtred = false }) => {
  const { slugId } = useParams();
  const renderLogic = filtred
    ? categories.filter(item => item.id === slugId)
    : categories;

  return (
    <div className="products--main container">
      <AsideBox categories={categories} />
      <div className="products--main-store">
        <ProductsListCards renderLogic={renderLogic} />
      </div>
    </div>
  );
};

const ProductsListCards = ({ renderLogic }) =>
  renderLogic.map(category => {
    const { id, name, products } = category;
    return (
      <div key={`listp${id}`} className="products--card-wrapper">
        <h3>{name}</h3>
        <div className="products--grid">
          <ListCardsDetails products={products} />
        </div>
      </div>
    );
  });

const ListCardsDetails = ({ products }) =>
  products.map(item => {
    const routerParams = {
      pathname: `/shop/surfboard/${item.refrence}`,
      state: item
    };
    return (
      <Link to={routerParams} key={item.refrence}>
        <div className="products--item">
          <img src={item.image} alt="" />
          <div className="products--item-flex">
            <span>{item.prodName}</span>
            <span>{item.price}</span>
          </div>
        </div>
      </Link>
    );
  });

const AsideBox = ({ categories }) => {
  const { slugId } = useParams();
  return (
    <div className="products--main-aside">
      <h3>SHORTCUTS</h3>
      <ul>
        <li>
          <Link to="/shop/surfboards/">ALL</Link>
        </li>
        <AsideBoxLists slug={slugId} categories={categories} />
      </ul>
      <p>
        Surfboards manufactured and sold by Patagonia are guaranteed for quality
        and performance. We stand by our surfboards and aim to produce the
        highest quality products. Our surfboards are made for surfers, by
        surfers.
      </p>
    </div>
  );
};

const AsideBoxLists = ({ categories, slug }) =>
  categories.map(category => {
    let { id, name, products } = category;
    return (
      <li key={`listc${id}`}>
        <Link to={`/shop/surfboards/${id}`}>{name}</Link>
        <div className="products--main-sublist">
          {id === slug && <AsideBoxSublists products={products} />}
        </div>
      </li>
    );
  });

const AsideBoxSublists = ({ products }) =>
  products.map((item, i) => {
    let { refrence, prodName } = item;
    let routerParams = {
      pathname: `/shop/surfboard/${refrence}`,
      state: item
    };
    return (
      <Link to={routerParams} key={`${refrence}${i}`}>
        <span>{prodName}</span>
      </Link>
    );
  });

export default Products;
