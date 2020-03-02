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
  const footerItems = [
    "Contact Us",
    "FAQ's",
    "Returns",
    "Warranty",
    "Surfboards",
    "Registration",
    "Safety Notifications",
    "Terms of Use",
    "Counterfeit",
    "Awareness",
    "Careers"
  ];
  const footerItemsMapper = footerItems.map((item, index) => {
    return <li key={index + "item"}>{item}</li>;
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="footer--grid-wrapper">
          <div className="footer--gridbox-lt">
            <form>
              <input type="text" placeholder="Join Our Newslettre" />
              <button>Join</button>
            </form>
            <span>By submitting your email address you agree to the </span>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer--gridbox-rg">
            <ul>{footerItemsMapper}</ul>
            <span>© 2020. Patagonia Surfboards. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};
