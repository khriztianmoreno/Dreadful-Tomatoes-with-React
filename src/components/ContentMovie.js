import React from "react";

import Data from "../data/data.json";

import "../styles/contentmovie.scss";

const Content = () => {
  const Movies = Data.entries.filter((data) => data.programType === "movie");

  return (
    <section className="box-movie">
      {Movies.map((data) => (
        <div className="box-card-movie">
          <img src={data?.images["Poster Art"]?.url} alt={data.title} />
          <div className="box-card-title">
            <p>{data.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
