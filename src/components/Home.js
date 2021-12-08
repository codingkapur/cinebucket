import React from "react";
import { useGlobalContext } from "../context";
import Movies from "./home-components/Movies";
import "./Home.css";
const Home = () => {
  const {
    searchState,
    heroMovie,
    secureBaseUrl,
    posterSizeW500,
    backdropSizeOriginal,
  } = useGlobalContext();
  const {
    backdrop_path,
    budget,
    overview,
    release_date,
    revenue,
    runtime,
    tagline,
    vote_average,
    title,
    poster_path,
  } = heroMovie;
  if (searchState) {
    return <Movies />;
  }
  const moneyFormat = Intl.NumberFormat('en-US')
  return (
    <div
      className="home__container"
      style={{
        backgroundImage: `url(${secureBaseUrl}${backdropSizeOriginal}${backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero__movie--container">
        <div className="hero__movie--image--container">
          <img
            className="hero__movie--image"
            src={`${secureBaseUrl}${posterSizeW500}${poster_path}`}
            alt={`${title} Movie Poster`}
          ></img>
        </div>
        <div className="hero__movie--info">
          <div className="hero__movie--info--top">
            <p className="movie__title">{title}</p>
            <p className="movie__tagline">{tagline}</p>
            <p className="movie__overview">{overview}</p>
          </div>
          <div className="movie__facts--container">
            <div className="movie__fact--container">
              <p className="movie__fact--title">Total Budget</p>

              <p className="movie__fact--info">$ {moneyFormat.format(budget)}</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Revenue</p>

              <p className="movie__fact--info">$ {moneyFormat.format(revenue)}</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Released On</p>

              <p className="movie__fact--info">{release_date}</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Runtime</p>

              <p className="movie__fact--info">{runtime} Minutes</p>
            </div>
            <div className="movie__fact--container">
              <p className="movie__fact--title">Average Rating</p>

              <p className="movie__fact--info">{vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
