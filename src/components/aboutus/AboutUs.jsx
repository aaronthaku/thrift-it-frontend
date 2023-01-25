import React from "react";
// import aboutus from "../assets/aboutus.svg";
// import logo from "../assets/logo.svg";
import "./aboutus.scss";

const AboutUs = () => {
  return (
    <div className="aboutcontainer">
      <div className="container-fluid">
        <br />
        <br />
        <h1 className="text-center">Welcome to Thrift It</h1>
        <div className="container1 text-center">
          <p className="aboutuspara">
            The marketplace is where commodities are exchanged for money.
            Secondhand items are the repurposing of an old product while
            retaining its essential functionality. There is a huge market for
            second-hand or pre-owned products around the world. However,
            exchanging pre-owned items has a distinct tradition. It has been
            practiced for centuries, going back to the time of bartering, when
            an item no longer useful to its owners is swapped for something
            wanted by them but not by the other person. Not just for economic
            customer motives but also for ethical and social ones, the
            secondhand market is a worthwhile alternative and a genuine
            challenge to the new consumer goods market. According to worldwide
            studies, digitization not only aids in sustainability but also
            enhances the tendency for re-commercialization, which is a result of
            the shifting values and consumer behavior of generations X, Y, and
            Z. The rise of new trade forms, the current generation's purchasing
            behavior, and the growth of social media, the Internet, and
            ecological sustainability have all contributed to the gradual
            increase of the second-hand products industry. <br />
            <br /> Gathering data has become more common in recent years. Any
            application that users access online gathers information on
            individual activities, including what they do, how they interact
            with others, and what they look for. It is not an exaggeration to
            say that such applications know users better than they know
            themselves when they are paired with the right tool. One of the
            widely used applications of this data is a recommendation system.
            This is a machine learning program that makes individualized
            recommendations and forecasts a user's future preferences for a
            group of items.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
