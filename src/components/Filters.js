import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/filters.scss";

const Filters = () => {
  return (
    <section className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      <input type="text" className="input-search" placeholder="Name"></input>
    </section>
  );
};

export default Filters;
