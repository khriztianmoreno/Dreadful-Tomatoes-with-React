import React from "react";

import Navbar from "../components/Navbar";
import ContentMovie from "../components/ContentMovie";

const Movies = ({ tag }) => {
  return (
    <>
      <Navbar tag={tag} />
      <ContentMovie />
    </>
  );
};

export default Movies;
