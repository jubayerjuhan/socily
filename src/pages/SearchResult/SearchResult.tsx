import React from "react";
import { useSelector } from "react-redux";
import MobileBottomNav from "../../components/MobileBottomNav/MobileBottomNav";
import PageComponent from "../../components/PageComponent/PageComponent";
import SearchUserCard from "../../components/SearchUserCard/SearchUserCard";
import { State } from "../../typings/redux-typings/redux-typings";
import "./SearchResult.scss";

const SearchResult = () => {
  return <PageComponent component={<SearchResultComponent />} />;
};

export default SearchResult;

const SearchResultComponent = () => {
  const { theme } = useSelector((state: State) => state.theme);

  return (
    <>
      <div className={`searchResult searchResult-${theme}`}>
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
      </div>
      <MobileBottomNav />
    </>
  );
};
