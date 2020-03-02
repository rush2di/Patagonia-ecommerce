import React, { useContext } from "react";
import searchIcon from "../assets/icons/SearchIcon.svg";
import cartIcon from "../assets/icons/ShoppingCartIcon.svg";
import { DataContext } from "../context/dataContext";

const Layout = props => {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

const NavBar = () => {
  const { categories } = useContext(DataContext);
  const categoriesMapper = categories.map(cat => {
    return <li key={`cat${cat.id}`}>{cat.name}</li>;
  });

  return (
    <React.Fragment>
      <div className="head--msg">FREE SHIPPING ON ALL ORDERS OVER $450.</div>
      <nav className="nav">
        <div className="nav--Logo">Logo</div>
        <ul className="nav--items">
          <li>Surfboards</li>
          {categoriesMapper}
        </ul>
        <div className="nav--icons">
          <button>
            <img src={searchIcon} />
          </button>
          <button>
            <img src={cartIcon} />
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

const Footer = () => {
  return <div className="footer">footer goes here</div>;
};
