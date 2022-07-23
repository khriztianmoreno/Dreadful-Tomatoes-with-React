import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landingpage";
import Movies from "./pages/Movies";
import TvShows from "./pages/Tvshows";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<Movies tag="movies" />} />
        <Route path="/tvshows" element={<TvShows tag="tvshows" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
