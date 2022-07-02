import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../App";
import Movie from "../Movie/Movie";
import { url } from "../Displaymovies/Display";
import "../../styles/Watchlater.css";

function Watchlater() {
  const { watchlater } = useContext(MovieContext);
  const { setwatchlater } = useContext(MovieContext);
  const { watchlist } = useContext(MovieContext);
  const { setwatchlist } = useContext(MovieContext);

  // function run after the btn remove is clicked
  const btnRemove = (movie) => {
    watchlater.delete(movie);
    setwatchlater(new Set([...watchlater]));
  };

  // it updates the watchlater after the remove of the movies
  useEffect(() => {
    setwatchlist([...watchlater]);
  }, [watchlater]);

  return (
    <>
      (
      <div className="main">
        <div className="gobacklink">
          <div className="header-h1-watchlater">
            <h1>WatchLater Movies</h1>
          </div>
          <div className="header-btn-watchlater">
            <Link className="gobackbtn" to="/">
              Go Back
            </Link>
          </div>
        </div>
        {watchlist.length === 0 ? (
          <div className="empty-div">
            <h1>Watchlater Cart is Empty </h1>
          </div>
        ) : (
          <div className="watchlater-div">
            <div className="watchlaterMain-div">
              {watchlist.map((movie) => {
                return (
                  <div key={movie.imdbID} className="watchlater-movie">
                    <div className="movie-img">
                      <img
                        src={movie.Poster === "N/A" ? url : movie.Poster}
                        alt={movie.Title}
                      />
                    </div>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Runtime}</p>
                    <button
                      className="btn-remove"
                      onClick={() => btnRemove(movie)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      )
    </>
  );
}

export default Watchlater;
