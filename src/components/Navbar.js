import React from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const {
    searchState,
    setSearchState,
    handleSearch,
    setQuery,
    query,
    setLoading,
    setMovies,
  } = useGlobalContext();
  const handleSearchInput = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSearchIconClick = () => {
    setSearchState(!searchState);
    setLoading(true);
    setMovies([]);
    setQuery("");
  };
  const handleLogoClick = () => {
    setSearchState(false);
  };
  return (
    <nav>
      <div className="navbar__container">
        <Link to={`/cinebucket`}>
          <div className="nav__logo--container" onClick={handleLogoClick}>
            <p className="logo">CineBucket</p>
            <p className="logo__subtitle">Explore Cinema</p>
          </div>
        </Link>
        <form className="nav__search--form" onSubmit={handleSearch}>
          <Link to={`/cinebucket/`}>
            <input
              autoComplete="off"
              type="text"
              name="query"
              placeholder="Enter Movie Name"
              value={query}
              onChange={(e) => handleSearchInput(e)}
              className={
                searchState ? "nav__search--input active" : "nav__search--input"
              }
            />
          </Link>
          <FiSearch
            className="nav__search--icon"
            onClick={handleSearchIconClick}
          />
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
