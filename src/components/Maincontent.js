import React from "react";

import Movies from "../assets/movies.png";
import Series from "../assets/series.png";

import "../styles/maincontent.scss";

const Maincontent = ({ showMovies, showTvShow }) => {
  return (
    <section className="section-container">
      <div onClick={showMovies} className="section-container-item">
        <img src={Movies} alt="Movies" />
        <div className="section-container-item-movies">
          <p>Movies</p>
        </div>
      </div>
      <div onClick={showTvShow} className="section-container-item">
        <img src={Series} alt="Series" />
        <div className="section-container-item-series">
          <p>Series</p>
        </div>
      </div>
    </section>
  );
};

export default Maincontent;
