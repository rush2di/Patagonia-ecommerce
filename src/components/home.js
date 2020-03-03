import React from "react";
import heroBg from "../assets/images/Hero-min.jpg";

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
    </React.Fragment>
  );
};

export default Home;
