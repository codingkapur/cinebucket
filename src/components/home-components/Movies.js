import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import "./Movies.css";
import Error from "../Error";
import { Link } from "react-router-dom";
const Movies = () => {
  const { movies, loading, secureBaseUrl, posterSizeW185 } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if(movies.length<1){
    return <Error />
  }
  return (
    <section className="movies__container">
      {movies.map((movie) => {
        // console.log(movie);
        const {
          // posterPath,
          title,
          // originalTitle,
          // originalLanguage,
          // overview,
          // releaseDate,
          // averageRating,
          id,
        } = movie;
        return (
          <Link to={`/cinebucket/${id}`} key={id} className="movie__container--link">
            <div className="search__movie--container">
              <img
                src={`${secureBaseUrl}${posterSizeW185}${movie.poster_path}`}
                alt={`${movie.original_title} Movie Poster`}
                className="search__movie--image"
              ></img>
              <p className="search__movie--title">{title}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
