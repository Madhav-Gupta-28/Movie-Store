import Display from "./component/Displaymovies/Display";
import Watchlater from "./component/Watchlater/Watchlater";
import Movie from "./component/Movie/Movie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useState } from "react";

export const MovieContext = React.createContext(null);

function App() {
  const [movieSearch, setmovieSearch] = useState("avengers");
  const [watchlater, setwatchlater] = useState([]);
  const [watchlist, setwatchlist] = useState([]);

  return (
    <>
      <MovieContext.Provider
        value={{
          movieSearch,
          setmovieSearch,
          watchlater,
          setwatchlater,
          watchlist,
          setwatchlist,
        }}
      >
        {/* <watchlaterProvider> */}
        <Router>
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/watchlater" element={<Watchlater />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Routes>
        </Router>
        {/* </watchlaterProvider> */}
      </MovieContext.Provider>
    </>
  );
}

export default App;
