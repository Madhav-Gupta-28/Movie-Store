import React from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../context";
import "../../styles/Movie.css";
import { url } from "../Displaymovies/Display";
import { MovieContext } from "../../App";
import "../../styles/Watchlater.css";

// Displaying a single movie here on per page

const Movie = function () {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  const { watchlater } = useContext(MovieContext);
  const { setwatchlater } = useContext(MovieContext);
  const { watchlist } = useContext(MovieContext);
  const { setwatchlist } = useContext(MovieContext);

  // function run after clicking the addtowatchlater btn
  const submitwatchlater = () => {
    setwatchlater(new Set([...watchlater, movie]));
    setwatchlist([...watchlater]);
    console.log(watchlater);
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster === "N/A" ? url : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <div className="btn-div-movie">
          <Link to="/" className="btn">
            Back to Movies
          </Link>
          <button className="watchlater-btn" onClick={submitwatchlater}>
            Add To Watchlater
          </button>
        </div>
      </div>
    </section>
  );
};

export default Movie;
