import React, { useState, useEffect, useContext } from "react";
import Search from "../Search/Search";
import Movie from "../Movie/Movie";
import { MovieContext } from "../../App";
import { Link } from "react-router-dom";
import "../../styles/DisplayMovies.css";
import "../../styles/Movie.css";

const API_KEY = 35502290;
//  pivtures url is picture of  movie is N/A
export const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const defaultMovie = [
  {
    Poster: `${url}`,
    Title: "Movie Not Found",
    Type: "movie",
    Year: "None ",
    imdbID: "1",
  },
  {
    Poster: `${url}`,
    Title: "Movie Not Found",
    Type: "movie",
    Year: "None ",
    imdbID: "1",
  },
  {
    Poster: `${url}`,
    Title: "Movie Not Found",
    Type: "movie",
    Year: "None ",
    imdbID: "1",
  },
];

function Display() {
  const { movieSearch } = useContext(MovieContext);
  const [movies, setmovies] = useState([]);

  //  fetching the movies
  const fetchMovies = async function (search) {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await res.json();
    console.log(data);
    setmovies(data.Search || defaultMovie);
  };

  //  for displaying the movie results after every search
  useEffect(() => {
    fetchMovies(movieSearch);
  }, [movieSearch]);

  return (
    <>
      <h1 className="headingSearch">Search Movies </h1>
      <Search />
      <section className="movies">
        {movies.map((movie) => {
          const {
            imdbID: id,
            Poster: poster,
            Title: title,
            Year: year,
          } = movie;

          return (
            <Link
              to={`/movies/${id}`}
              key={id}
              className="movie"
              style={{ textDecoration: "none " }}
            >
              <article className="movie-article">
                <img
                  src={poster === "N/A" ? url : poster}
                  alt={title}
                  className="movie-img"
                />

                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
      {/* ) : (
    <div>
      <p>{response.Error}</p>
    </div>
    ) */}
    </>
  );
}

export default Display;
