import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(5915);
  const [movieID, setMovieID] = useState();
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState(false);

  //CONFIG STATE VALUES
  const [secureBaseUrl, setSecureBaseUrl] = useState("");
  const [posterSizeW500, setPosterSizeW500] = useState("");
  const [posterSizeW185, setPosterSizeW185] = useState("");
  const [backdropSizeOriginal, setBackdropSizeOriginal] = useState("");
  const favMoviesIDS = [
    77338, 6977, 641, 13223, 603, 5915, 244786, 14160, 2062, 228150, 242582,
    157336, 14161, 502033, 3131, 7345, 141, 117691, 126400, 550, 284054, 286217,
    627, 275, 115, 14, 73, 680, 629, 807, 769, 101, 273248, 1124, 278, 107,334533,2675,155,
  ];
  //API ENDPOINTS
  const API_SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
  const API_CONFIG_ENDPOINT = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

  //FUNCTIONS
  const generateRandom = () => {
    console.log(Math.trunc(Math.random() * 35));
    return favMoviesIDS[Math.trunc(Math.random() * 35)];
  };
  const fetchHeroMovie = async (movie) => {
    setMovieID(movie);
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await res.json();
      if (data) {
        setHeroMovie(data);
      } else {
        console.log("error");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  //FETCH SEARCH QUERY FUNCTION
  const fetchSearchMovie = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_SEARCH_ENDPOINT);
      const data = await res.json();
      if (data.results.length < 1) {
        console.log("No results found!");
      } else {
        setMovies(data.results.filter((movie) => movie.poster_path !== null));
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
      // console.log(data);
      setSecureBaseUrl(data.images.secure_base_url);
      setBackdropSizeOriginal(data.images.backdrop_sizes[3]);
      //   API_CONFIG_BACKDROP_SIZE_MOBILE = data.images.backdrop_sizes[0];
      setPosterSizeW500(data.images.poster_sizes[4]);
      setPosterSizeW185(data.images.poster_sizes[2]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getConfigData();
  }, []);
  //SEARCH FETCH
  useEffect(() => {
    if (query.length > 0) {
      fetchSearchMovie(API_SEARCH_ENDPOINT);
    }
  }, [query]);
  useEffect(() => {
    fetchHeroMovie(generateRandom());
  }, []);
  //HANDLE SEARCH QUERY FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <AppContext.Provider
      value={{
        API_SEARCH_ENDPOINT,
        loading,
        setLoading,
        movies,
        setMovies,
        movieID,
        handleSearch,
        secureBaseUrl,
        backdropSizeOriginal,
        posterSizeW500,
        posterSizeW185,
        query,
        setQuery,
        searchState,
        setSearchState,
        heroMovie,
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
