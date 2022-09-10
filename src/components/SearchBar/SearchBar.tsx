import React from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import "./SearchBar.scss";
const SearchBar = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`searchBar searchBar-${theme}`}>
      <BiSearch />
      <input type="text" className="searchBar--input" />
    </div>
  );
};

export default SearchBar;
