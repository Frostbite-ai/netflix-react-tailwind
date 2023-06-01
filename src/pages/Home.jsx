import React from "react";
import Main from "./Main.jsx";
import Row from "../components/Row.jsx";
import Requests from "../Requests.js";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={Requests.requestUpcoming} />
      <Row title="Popular" fetchURL={Requests.requestPopular} />
      <Row title="Trending" fetchURL={Requests.requestTrending} />
      <Row title="Top Rated" fetchURL={Requests.requestTopRated} />
      <Row title="Horror" fetchURL={Requests.requestHorror} />
    </div>
  );
};

export default Home;
