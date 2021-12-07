import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [movieID, setMovieID] = useState(273248);
  const [query, setQuery] = useState("bourne");
  //CONFIG STATE VALUES
  const [secureBaseUrl, setSecureBaseUrl] = useState("");
  const [posterSizeW500, setPosterSizeW500] = useState("");
  const [posterSizeW185, setPosterSizeW185] = useState("");
  const [backdropSizeOriginal, setBackdropSizeOriginal] = useState("");

  //API ENDPOINTS
  const API_SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
  const API_CONFIG_ENDPOINT = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

  //FUNCTIONS
  //FETCH SEARCH QUERY FUNCTION
  const fetchSearchMovie = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_SEARCH_ENDPOINT);
      const data = await res.json();
      if (data.results.length < 1) {
        console.log("No results found!");
        setError({ show: true, msg: "No results found for this search query" });
      } else {
        setMovies(data.results.filter(movie=> movie.poster_path !==null));
        setError({ show: false, msg: "" });
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getConfigData = async () => {
    try {
      const res = await fetch(API_CONFIG_ENDPOINT);
      const data = await res.json();
      setSecureBaseUrl(data.images.secure_base_url);
      setBackdropSizeOriginal(data.images.backdrop_sizes[3]);
      //   API_CONFIG_BACKDROP_SIZE_MOBILE = data.images.backdrop_sizes[0];
      setPosterSizeW500(data.images.poster_sizes[4]);
      setPosterSizeW185(data.images.poster_sizes[2]);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getConfigData();
  }, []);
  //SEARCH FETCH
  useEffect(() => {
    fetchSearchMovie(API_SEARCH_ENDPOINT);
  }, [query]);

  //HANDLE SEARCH QUERY FUNCTION
  const handleSearch = (e) => {
    setQuery(e.currentTarget.innerText);
  };
  return (
    <AppContext.Provider
      value={{
        API_SEARCH_ENDPOINT,
        loading,
        error,
        movies,
        movieID,
        handleSearch,
        secureBaseUrl,
        backdropSizeOriginal,
        posterSizeW500,
        posterSizeW185,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
