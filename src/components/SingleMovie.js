import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useLocation } from "react-router";
const SingleMovie = () => {
  const { secureBaseUrl, backdropSizeOriginal, posterSizeW500 } =
    useGlobalContext();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieLoading, setMovieLoading] = useState(false);
  const [movieGenres, setMovieGenres] = useState([]);

  const API_MOVIE_ENDPOINT = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const genres = [];
  const fetchMovie = async () => {
    try {
      setMovieLoading(true);
      const res = await fetch(API_MOVIE_ENDPOINT);
      const data = await res.json();
      Object.entries(data.genres).forEach((genre) => {
        genres.push(genre[1].name);
      });
      setMovieGenres(genres);
      setMovie(data);
      setMovieLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (movieLoading) {
    return "Loading";
  }

  const moneyFormat = Intl.NumberFormat("en-US");
  return (
    <div
      className="home__container"
      style={{
        backgroundImage: `url(${secureBaseUrl}${backdropSizeOriginal}${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero__movie--container">
        <div className="hero__movie--image--container">
          <img
            className="hero__movie--image"
            src={`${secureBaseUrl}${posterSizeW500}${movie.poster_path}`}
            alt={`${movie.title} Movie Poster`}
          ></img>
        </div>
        <div className="hero__movie--info">
          <div className="her__movie--info--top">
            <p className="movie__title">{movie.title}</p>
            <p className="movie__tagline">{movie.tagline}</p>
            <p className="movie__overview">{movie.overview}</p>
            <p className="movie__genres">{movieGenres.join(" . ")}</p>
          </div>
          <div className="movie__facts--container">
            <div className="movie__fact--container">
              <p className="movie__fact--title">Total Budget</p>

              <p className="movie__fact--info">
                {moneyFormat.format(movie.budget) === "0"
                  ? "N/A"
                  : `$ ${moneyFormat.format(movie.budget)}`}
              </p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Revenue</p>

              <p className="movie__fact--info">
                {moneyFormat.format(movie.revenue) === "0"
                  ? "N/A"
                  : `$ ${moneyFormat.format(movie.revenue)}`}
              </p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Released On</p>

              <p className="movie__fact--info">{movie.release_date}</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Runtime</p>

              <p className="movie__fact--info">{movie.runtime} Minutes</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">
                Average Rating
                <br />
                <span>(as per themoviedb.org)</span>
              </p>

              <p className="movie__fact--info">
                {movie.vote_average === "0" ? "N/A" : movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
