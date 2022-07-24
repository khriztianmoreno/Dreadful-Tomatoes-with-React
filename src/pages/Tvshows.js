import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

import Data from "../data/data.json";

const Tvshows = ({ tag }) => {
  const Tvshows = Data.entries.filter((data) => data.programType === "series");

  const [tvshows] = useState(Tvshows);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = tvshows.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages = Math.ceil(tvshows.length / moviesPerPage);

  return (
    <>
      <Navbar tag={tag} />
      <Content movies={currentMovies} />
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
