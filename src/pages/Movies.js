import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

import Data from "../data/data.json";

const Movies = ({ tag }) => {
  const Movies = Data.entries.filter((data) => data.programType === "movie");

  const [movies] = useState(Movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <>
      <Navbar tag={tag} />
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
