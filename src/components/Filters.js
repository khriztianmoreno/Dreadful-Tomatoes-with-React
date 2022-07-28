import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/filters.scss";

const Filters = ({ submit, reference }) => {
  return (
    <section>
      <form onSubmit={submit} className="search-container" ref={reference}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input
          type="text"
          name="text"
          className="input-search"
          placeholder="Name"
        ></input>
      </form>
    </section>
  );
};

export default Filters;
