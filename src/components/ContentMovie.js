import React from "react";

import "../styles/contentmovie.scss";

const Content = ({ movies }) => {
  return (
    <section className="box-movie">
      {movies.map((data) => (
        <div key={data.title} className="box-card-movie">
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
