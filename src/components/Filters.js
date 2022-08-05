import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "../styles/filters.scss";

const Filters = ({
  submit,
  reference,
  startDate,
  setStartDate,
  filterYearMovies,
  filterYearTvShows,
  tag,
}) => {
  return (
    <section className="filter-container">
      <form onSubmit={submit} className="search-container" ref={reference}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input
          type="text"
          name="text"
          className="input-search"
          placeholder="Name"
        ></input>
      </form>
      <div>
        {tag === "movies" ? (
          <DatePicker
            placeholderText="1920 -2022"
            className="datePicker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              filterYearMovies(date);
            }}
            showYearPicker
            dateFormat="yyyy"
            showPopperArrow={false}
          />
        ) : (
          <DatePicker
            placeholderText="1920 -2022"
            className="datePicker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              filterYearTvShows(date);
            }}
            showYearPicker
            dateFormat="yyyy"
            showPopperArrow={false}
          />
        )}
      </div>
    </section>
  );
};

export default Filters;
