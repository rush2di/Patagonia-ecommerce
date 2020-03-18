import React, { useContext, useEffect, useState } from "react";
import Spinner from "../components/spinner";
import heroBg from "../assets/images/image4.webp";
import mainBg from "../assets/images/image5.webp";
import { DataContext } from "../context/dataContext";
import softechBg from "../assets/images/Softech-min.webp";
import rrdBg from "../assets/images/RRD-min.webp";
import libtechBg from "../assets/images/LibTech-min.webp";
import logo from "../assets/icons/logo.svg";
import axios from "axios";

const Home = () => {
  const { categories: cards } = useContext(DataContext);
  const [state, setState] = useState({ data: [], hasError: false });
  const covers = [softechBg, rrdBg, libtechBg];
  const styles = {
    backgroundImage: `url(${mainBg})`,
    height: 395,
    backgroundPosition: "bottom",
    margin: "0 5rem"
  };

  useEffect(() => {
    const instagramAPI =
      'https://cors-anywhere.herokuapp.com/https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"4079200134","first":6}';
    const getThumbnails = async () => {
      try {
        let res = await axios.get(instagramAPI);
        let { edges } = res.data.data.user.edge_owner_to_timeline_media;
        setState({ ...state, data: edges });
      } catch (error) {
        setState({ ...state, hasError: true });
      }
    };
    if (!!state.data.length === false && state.hasError === false) {
      getThumbnails();
    }
  }, [state]);

  const cardsMapper = cards.map((card, i) => {
    return <Card key={i} name={card.name} bg={covers[i]} />;
  });

  return (
    <React.Fragment>
      <div
        className="main--hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
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
            <div className="main--section-prods-grid">{cardsMapper}</div>
          </div>
        </div>
        <div className="main--section-cover" style={styles}></div>
        <div className="main--section-iframe">
          <iframe
            src="https://www.youtube.com/embed/XqeP2fYyw4g"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            secure="true"
            height="300"
            width="560"
            gesture="media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
      <div className="main--section-instagram">
        <div className="container">
          <h4>FOLLOW US ON INSTAGRAM</h4>
          {!!state.data.length ? (
            <Thumbnails data={state.data} />
          ) : (
            state.hasError || <Spinner />
          )}
          {state.hasError && (
            <div className="spinner--block">
              <p>An unexpected error occurred while fetching data</p>
            </div>
          )}
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

const Thumbnails = ({ data }) => {
  const dataMapper = data.map(edge => {
    const { id, thumbnail_src } = edge.node;
    return (
      <div key={id} className="instagram--img">
        <img src={thumbnail_src} alt="thumbnail" />
      </div>
    );
  });
  return <div className="instagram--grid">{dataMapper}</div>;
};
