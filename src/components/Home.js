import React from "react";
import { useGlobalContext } from "../context";
import Movies from "./home-components/Movies";
import "./Home.css";
const Home = () => {
  const { movieID } = useGlobalContext();

  
  return (
    <div className="home__container">
      <Movies />
    </div>
  )
};

export default Home;
