import React, { useContext } from "react";
import heroBg from "../assets/images/Hero-min.jpg";
import { DataContext } from "../context/dataContext";
import softechBg from "../assets/images/Softech-min.jpg";
import rrdBg from "../assets/images/RRD-min.jpg";
import libtechBg from "../assets/images/LibTech-min.jpg";
import logo from "../assets/icons/logo.svg";

const Home = props => {
  const { categories: cards } = useContext(DataContext);
  const covers = [softechBg, rrdBg, libtechBg];
  const cardsMapper = cards.map((card, i) => {
    const { id, name } = card;
    return <Card key={`-${id}`} name={name} bg={covers[i]} />;
  });

  return (
    <React.Fragment>
      <div className="main--hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="main--hero-over">
          <div className="container">
            <div className="main--hero-over-txt">
              <h1>
                WE HAVE
                <br />
                THE WORKS
              </h1>
              <p>ITS ALL FUN AND GAMES UNTIL YOU CATCH TOO MUCH AIR</p>
              <button>MASON TWIN LIME</button>
            </div>
            <div className="main--hero-over-comp">
              <span>TAKE A DEEPER LOOK AT THE</span>
              <span>SOFTECH SURFBOARDS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main--section-intro">
        <div className="main--section-intro-box">
          <div>
            <img src={logo} alt="patagonia" />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>OUR STORY</button>
        </div>
      </div>
      <div className="main--section-prods">
        <div className="main--section-prods-box">
          <div className="container">
            <h4>DISCOVER OUR SURFBOARDS</h4>
            <div className="main--section-prods-grid">{cardsMapper}</div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${heroBg})`, height: 550 }}>
          <div className="main--section-cover-over main--section-cover">
            <div className="main--section-cover-txt">
              <h1>NEW MARS PROD MAX</h1>
            </div>
            <div className="main--section-cover-comp">
              <span>Duis aute irure dolor in reprehenderit</span>
              <span>in voluptate velit esse cillum dolore eu</span>
              <span>fugiat nulla pariatur</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

const Card = ({ name, bg }) => {
  return (
    <React.Fragment>
      <div className="card" style={{ backgroundImage: `url(${bg})` }}>
        <div className="card--over">
          <span>{name}</span>
        </div>
      </div>
    </React.Fragment>
  );
};
