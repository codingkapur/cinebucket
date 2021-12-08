import React from "react";
import { useGlobalContext } from "../context";
import "./Loading.css";
const Loading = () => {
  const { query } = useGlobalContext();

  return (
    <div className="loading__container">
      {query === "" ? (
        <p className="loading__message">Search for a movie</p>
      ) : (
        <p className="loading__message">Loading...</p>
      )}
    </div>
  );
};

export default Loading;
