import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Maincontent from "../components/Maincontent";
import Navbar from "../components/Navbar";

const Landingpage = () => {
  let navigate = useNavigate();

  const showMovies = () => {
    navigate("/movies");
  };

  const showTvShow = () => {
    navigate("/tvshows");
  };

  return (
    <>
      <Navbar />
      <Maincontent showMovies={showMovies} showTvShow={showTvShow} />
      <Footer />
    </>
  );
};

export default Landingpage;
