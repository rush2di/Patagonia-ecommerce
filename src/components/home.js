import React from "react";
import heroBg from "../assets/images/Hero-min.jpg";
import logo from "../assets/icons/logo.svg";

const Home = props => {
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
    </React.Fragment>
  );
};

export default Home;
