import React from "react";
import HeroImage from "../assets/images/about1.jpg";
import MainImage from "../assets/images/about2.png";

const About = () => {
  return (
    <div className="main--about container">
      <div className="main--about-hero">
        <img src={HeroImage} alt="" />
        <p>
          Staying true to our core values during thirty-plus years in business
          has helped us create a company we’re proud to run and work for. And
          our focus on making the best products possible has brought us success
          in the marketplace.
        </p>
        <img src={MainImage} alt="" />
        <p>
          Patagonia grew out of a small company that made tools for climbers.
          Alpinism remains at the heart of a worldwide business that still makes
          clothes for climbing – as well as for skiing, snowboarding, surfing,
          fly fishing, paddling and trail running. These are all silent sports.
          None require a motor; none deliver the cheers of a crowd. In each
          sport, reward comes in the form of hard-won grace and moments of
          connection between us and nature.
        </p>
        <p>
          Our values reflect those of a business started by a band of climbers
          and surfers, and the minimalist style they promoted. The approach we
          take towards product design demonstrates a bias for simplicity and
          utility.
        </p>
        <p>
          For us at Patagonia, a love of wild and beautiful places demands
          participation in the fight to save them, and to help reverse the steep
          decline in the overall environmental health of our planet. We donate
          our time, services and at least 1% of our sales to hundreds of
          grassroots environmental groups all over the world who work to help
          reverse the tide.
        </p>
        <p>
          We know that our business activity – from lighting stores to dyeing
          shirts – creates pollution as a by-product. So we work steadily to
          reduce those harms. We use recycled polyester in many of our clothes
          and only organic, rather than pesticide-intensive, cotton.
        </p>
      </div>
      <div className="main--about-iframe">
        <iframe
          src="https://www.youtube.com/embed/pMAYJTWXeLM"
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
      <div className="main--about-jobs">
        <h3>WHY WORK HERE</h3>
        <p>
          If there’s one thing that unites the people who work here, it’s this:
          We believe that surfing have the power to change lives. That’s why
          we’re always looking for passionate people from all disciplines who
          share in this belief and who are looking to play an active role in
          inspiring and getting more people on surfboards. Are you ready to make
          a difference?
        </p>
        <button>SEARCH JOB OPENINGS</button>
      </div>
    </div>
  );
};

export default About;
