import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.scss";
const SearchBar = () => {
  const theme = "light";
  return (
    <div className={`searchBar searchBar-${theme}`}>
      <BiSearch />
      <input type="text" className="searchBar--input" />
    </div>
  );
};

export default SearchBar;
