import React, { useContext } from "react";
import searchIcon from "../assets/icons/SearchIcon.svg";
import cartIcon from "../assets/icons/ShoppingCartIcon.svg";
import Logo from "../assets/icons/logo.svg";
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
    <div className="head">
      <div className="head--msg">
        <div className="container">
          <span>FREE SHIPPING ON ALL ORDERS OVER $450.</span>
          <button>EN</button>
          <button>SIGN IN</button>
        </div>
      </div>
      <nav className="nav">
        <div className="container">
          <div className="nav--Logo">
            <img src={Logo} />
          </div>
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
        </div>
      </nav>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">footer goes here</div>;
};
