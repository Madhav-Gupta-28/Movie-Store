import React, { useState, useEffect, useContext, useRef } from "react";
import "../../styles/Search.css";
import { Link } from "react-router-dom";
import { MovieContext } from "../../App";

function Search() {
  const searchref = useRef();
  const [search, setsearch] = useState("");
  const { setmovieSearch } = useContext(MovieContext);

  const handleClick = (e) => {
    e.preventDefault();
    setsearch(searchref.current.value);
    setmovieSearch(search);
  };

  return (
    <>
      <div className="mainSearchdiv">
        <div className="search">
          <form className="form">
            <input
              ref={searchref}
              autoComplete="off"
              name="search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search for Movies "
            />
            <button type="submit" className="submitbtn" onClick={handleClick}>
              Search
            </button>
          </form>
        </div>
        <div className="watchlaterlink">
          <Link to="watchlater" className="watchlatertext">
            Watch Later
          </Link>
        </div>
      </div>
    </>
  );
}

export default Search;
