import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

import "../styles/content.scss";

const Content = ({ movies, tag }) => {
  return (
    <>
      {tag === "movies" ? (
        <h2 className="box-popular-movie">Popular Movies</h2>
      ) : (
        <h2 className="box-popular-serie">Popular series</h2>
      )}
      <section className="box-movie">
        {movies.map((data) => (
          <div key={data?.title} className="box-card-movie">
            <img src={data?.images["Poster Art"]?.url} alt={data?.title} />
            <div className="box-card-title" id="box-card-title">
              <p>{data?.title}</p>
            </div>
            <div className="box-card-title-hide">
              <p>{data?.title}</p>
              <div className="box-card-title-hide-container">
                <FontAwesomeIcon
                  icon={faCalendarWeek}
                  className="box-card-title-hide-icon"
                />
                <p>{data?.releaseYear}</p>
              </div>

              <p>{data?.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Content;
