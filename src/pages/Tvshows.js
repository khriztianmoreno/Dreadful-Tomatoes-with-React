import React, { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

import Data from "../data/data.json";

const Tvshows = ({ tag }) => {
  const inputText = useRef(null);
  const [tvshows, setTvshows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = tvshows.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages = Math.ceil(tvshows.length / moviesPerPage);

  useEffect(() => {
    const filtersTvShows = () => {
      setTvshows(Data.entries.filter((data) => data.programType === "series"));
    };
    filtersTvShows();
  }, []);

  const handleFilterOnSubmit = (e) => {
    e.preventDefault();
    const inputData = new FormData(inputText.current);
    const findTvShowsRaw = inputData.get("text");

    const firstLetter = findTvShowsRaw[0]?.toUpperCase();
    const lastLetters = findTvShowsRaw.slice(1);
    const findTvShowsRefined = `${firstLetter}${lastLetters}`;

    if (findTvShowsRefined === "undefined") {
      setTvshows(Data.entries.filter((data) => data.programType === "series"));
    } else {
      setTvshows(
        Data.entries.filter(
          (data) =>
            data.title.includes(findTvShowsRefined) &&
            data.programType === "series"
        )
      );
    }
  };

  return (
    <>
      <Navbar tag={tag} />
      <Filters reference={inputText} submit={handleFilterOnSubmit} />
      <Content movies={currentMovies} tag={tag} />
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </>
  );
};
export default Tvshows;
