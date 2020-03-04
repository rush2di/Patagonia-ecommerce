import React, { useContext, useEffect, useState } from "react";
import heroBg from "../assets/images/Hero-min.jpg";
import mainBg from "../assets/images/Main.jpg";
import { DataContext } from "../context/dataContext";
import softechBg from "../assets/images/Softech-min.jpg";
import rrdBg from "../assets/images/RRD-min.jpg";
import libtechBg from "../assets/images/LibTech-min.jpg";
import logo from "../assets/icons/logo.svg";
import axios from "axios";

const userGraph = "graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b";
const vars = '&variables={"id":"233724914","first":6}';
const cors = "https://cors-anywhere.herokuapp.com/";

const Home = props => {
  const { categories: cards } = useContext(DataContext);
  const [state, setState] = useState({});
  const covers = [softechBg, rrdBg, libtechBg];
  const cardsMapper = cards.map((card, i) => {
    return <Card key={i} name={card.name} bg={covers[i]} />;
  });

  const getThumbnails = async () => {
    try {
      let res = await axios.get(
        `${cors}https://www.instagram.com/${userGraph}${vars}`
      );
      let { edges } = res.data.data.user.edge_owner_to_timeline_media;
      setState({ edges });
    } catch (error) {
      console.error(erro);
    }
  };

  useEffect(() => {
    getThumbnails();
  }, [state]);

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
        <div
          className="main--section-cover"
          style={{
            backgroundImage: `url(${mainBg})`,
            height: 550,
            backgroundPosition: "bottom"
          }}
        >
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
        <div className="main--section-iframe">
          <iframe
            src="https://player.vimeo.com/video/332463815"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            height="520px"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
      <div className="main--section-instagram">
        <div className="container">
          <h4>FOLLOW US ON INSTAGRAM</h4>
          <div className="instagram--grid">
            {new Array(6).fill("").map(i => {
              return <div className="instagram--img"></div>;
            })}
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
