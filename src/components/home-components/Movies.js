import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
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
        const {
          posterPath,
          title,
          originalTitle,
          originalLanguage,
          overview,
          releaseDate,
          averageRating,
        } = movie;
        return (
          <div className="movie__container">
            <img
              src={`${secureBaseUrl}${posterSizeW185}${movie.poster_path}`}
              alt={`${movie.original_title} Movie Poster`}
            ></img>
          </div>
        );
      })}
    </section>
  );
};

export default Movies;
