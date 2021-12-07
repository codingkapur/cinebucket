import React from "react";
import { useGlobalContext } from "../context";
import Search from "./home-components/Search";
import Movies from "./home-components/Movies";
const Home = () => {
  const { movieID } = useGlobalContext();

  
  return (
    <div className="home__container">
      <Search />
      <Movies />
    </div>
  )
};

export default Home;
