import React, { useEffect, useState, useRef } from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

import Data from "../data/data.json";

const Movies = ({ tag }) => {
  const inputText = useRef(null);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages = Math.ceil(movies.length / moviesPerPage);

  useEffect(() => {
    const filtersMovies = () => {
      setMovies(Data.entries.filter((data) => data.programType === "movie"));
    };
    filtersMovies();
  }, []);

  const handleFilterOnSubmit = (e) => {
    e.preventDefault();
    const inputData = new FormData(inputText.current);
    const findMoviesRaw = inputData.get("text");

    const firstLetter = findMoviesRaw[0]?.toUpperCase();
    const lastLetters = findMoviesRaw.slice(1);
    const findMovieRefined = `${firstLetter}${lastLetters}`;

    if (findMovieRefined === "undefined") {
      setMovies(Data.entries.filter((data) => data.programType === "movie"));
      setCurrentPage(1);
    } else {
      setMovies(
        Data.entries.filter(
          (data) =>
            data.title.includes(findMovieRefined) &&
            data.programType === "movie"
        )
      );
      setCurrentPage(1);
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

export default Movies;
