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
  const [startDate, setStartDate] = useState(new Date());

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

  const filterYearTvShows = (date) => {
    if (tag === "tvshows") {
      setTvshows(
        Data.entries.filter(
          (data) =>
            data.programType.includes("series") &&
            data.releaseYear === date.getFullYear()
        )
      );
      setCurrentPage(1);
    }
  };

  const handleFilterOnSubmit = (e) => {
    e.preventDefault();
    const inputData = new FormData(inputText.current);
    const findTvShowsRaw = inputData.get("text");
    const firstLetter = findTvShowsRaw[0]?.toUpperCase();
    const lastLetters = findTvShowsRaw.slice(1);
    const findTvShowsRefined = `${firstLetter}${lastLetters}`;

    if (findTvShowsRefined === "undefined") {
      setTvshows(Data.entries.filter((data) => data.programType === "series"));
      setCurrentPage(1);
    } else {
      setTvshows(
        Data.entries.filter(
          (data) =>
            data.title.includes(findTvShowsRefined) &&
            data.programType === "series"
        )
      );
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Navbar tag={tag} />
      <Filters
        tag={tag}
        reference={inputText}
        submit={handleFilterOnSubmit}
        startDate={startDate}
        setStartDate={setStartDate}
        filterYearTvShows={filterYearTvShows}
      />
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
