import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext({
  searchValue: "",
  handleSearchedValue: (searchVal) => {},
});

const SearchContextProvider = (props) => {
  const [searchedValue, setsearchedValue] = useState("pasta");

  const handleSearchedValue = (searchVal) => {
    console.log(searchVal)
    setsearchedValue(searchVal);
  };

  const contextValue = {
    searchValue: searchedValue,
    handleSearch: handleSearchedValue,
  };
  console.log("contextValue", contextValue)
  return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
};
export default SearchContextProvider;
