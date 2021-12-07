import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import "./Movies.css";
const Movies = () => {
  const {
    movies,
    loading,
    secureBaseUrl,
    backdropSizeOriginal,
    posterSizeW185,
    posterSizeW500,
  } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="movies__container">
      {movies.map((movie) => {
        // console.log(movie);
        const {
          posterPath,
          title,
          originalTitle,
          originalLanguage,
          overview,
          releaseDate,
          averageRating,
          id
        } = movie;
        return (
          <div className="movie__container" key={id}>
            <img
              src={`${secureBaseUrl}${posterSizeW185}${movie.poster_path}`}
              alt={`${movie.original_title} Movie Poster`}
              className="movie__image"
            ></img>
            <p className="movie__title">{title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Movies;
