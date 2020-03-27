import React, { useContext, useState } from "react";
import searchIcon from "../assets/icons/SearchIcon.svg";
import cartIcon from "../assets/icons/ShoppingCartIcon.svg";
import Logo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import userIcon from "../assets/icons/UserIcon.svg";
import menuIcon from "../assets/icons/MenuIcon.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";
import { DataContext } from "../context/dataContext";
import { Link } from "react-router-dom";

const Layout = props => {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

const NavBar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const { categories } = useContext(DataContext);
  const searchBarToggler = () => {
    setSearchBar(!searchBar);
  };
  const sideNavToggler = () => {
    setSideNav(!sideNav);
  };

  return (
    <div className="head">
      <div className="head--msg">
        <div className="container">
          <span>FREE SHIPPING ON ALL ORDERS OVER $450.</span>
          <button>EN</button>
          <Link to="/sign-in">
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
      <nav className="nav">
        <div className="container">
          <div className="nav--Logo">
            <Link to="/">
              <img src={Logo} alt="Patagonia" />
            </Link>
          </div>
          <MenuListItems categories={categories} />
          <div className="nav--icons">
            <button onClick={searchBarToggler}>
              <img src={searchIcon} alt="" />
            </button>
            <button>
              <Link to="/user/cart">
                <img src={cartIcon} alt="" />
              </Link>
            </button>
          </div>
        </div>
      </nav>
      <nav className="nav--sm">
        <div className="container">
          <div className="nav--items">
            <button onClick={sideNavToggler}>
              <img src={menuIcon} alt="" />
            </button>
            <button onClick={searchBarToggler}>
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <div className="nav--Logo">
            <Link to="/">
              <img src={Logo} alt="Patagonia" />
            </Link>
          </div>
          <div className="nav--items">
            <button>
              <Link to="/user/cart">
                <img src={cartIcon} alt="" />
              </Link>
            </button>
            <button>
              <Link to="/sign-in">
                <img src={userIcon} alt="" />
              </Link>
            </button>
          </div>
        </div>
      </nav>
      <SearchFlied isOpen={searchBar} searchBtn={searchBarToggler} />
      <MobileNav
        isOpen={sideNav}
        exit={sideNavToggler}
        categories={categories}
      />
    </div>
  );
};

const SearchFlied = ({ isOpen, searchBtn }) => {
  const toggler = isOpen ? "--open" : "--closed";
  return (
    <div className="nav--search-field">
      <div className={`search-field-drawer ${toggler}`}>
        <div className="container">
          <input type="text" name="search" />
          <button onClick={() => searchBtn()}>Search</button>
        </div>
      </div>
    </div>
  );
};

const MobileNav = ({ categories, isOpen, exit }) => {
  const toggler = isOpen ? "--open-nav" : "--close-nav";
  return (
    <div className={`side-nav ${toggler}`}>
      <div className="side-nav--wrapper">
        <div className="side-drawer-catgs">
          <div onClick={() => exit()} className="side-drawer-exit">
            <div className="exit-btn"></div>
          </div>
          <div className="side-drawer-tabs">
            <div className="tabs-shop">
              <p>SHOP</p>
            </div>
            <div onClick={() => exit()} className="tabs-about">
              <Link to="/about">
                <p>ABOUT US</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="side-nav--menu">
          <MenuListItems categories={categories} exit={exit} isSideNav={true} />
        </div>
      </div>
      <p className="side-nav--footer">Made For Surfers, By Surfers</p>
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
  const socialIcons = [facebook, instagram, twitter, youtube];
  const footerItemsMapper = footerItems.map((item, index) => {
    return <li key={index + "item"}>{item}</li>;
  });
  const socialIconsMapper = socialIcons.map((icon, index) => {
    return (
      <li key={index + "icon"}>
        <img src={icon} alt="" />
      </li>
    );
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="footer--grid-wrapper">
          <div className="footer--gridbox-ft">
            <form>
              <input type="text" placeholder="Join Our Newslettre" />
              <button>Join</button>
            </form>
            <span>By submitting your email address you agree to the </span>
            <a href="/#">Terms & Conditions</a>
          </div>
          <div className="footer--gridbox-sec">
            <ul>{footerItemsMapper}</ul>
            <span>© 2020. Patagonia Surfboards. All Rights Reserved</span>
          </div>
          <div className="footer--gridbox-thr">
            <span>Find Us On :</span>
            <ul>{socialIconsMapper}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuListItems = ({ categories, exit, isSideNav = false }) => {
  if (isSideNav) {
    const categoriesMapper = categories.map(cat => {
      return (
        <li onClick={() => exit()} key={`sidecat${cat.id}`}>
          <Link to={`/shop/surfboards/${cat.id}`}>{cat.name}</Link>
        </li>
      );
    });
    return (
      <ul>
        <li onClick={() => exit()}>
          <Link to="/shop/surfboards">Surfboards</Link>
        </li>
        {categoriesMapper}
      </ul>
    );
  } else {
    const categoriesMapper = categories.map(cat => {
      return (
        <li key={`cat${cat.id}`}>
          <Link to={`/shop/surfboards/${cat.id}`}>{cat.name}</Link>
        </li>
      );
    });
    return (
      <ul className="nav--items">
        <li>
          <Link to="/shop/surfboards">Surfboards</Link>
        </li>
        {categoriesMapper}
      </ul>
    );
  }
};

export default Layout;
