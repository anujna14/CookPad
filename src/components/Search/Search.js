import { SearchContext } from "./../../store/SearchContext/SearchContext";
import React, { useState, useContext } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [searchedValue, setSearchedValue] = useState("");
  const searchCtx = useContext(SearchContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchCtx.handleSearch(searchedValue);
    setSearchedValue("")
  };
  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <div>
        <input className="search__input" type="text" placeholder="Search" value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)} />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
    </form>
  );
}

export default Search;
