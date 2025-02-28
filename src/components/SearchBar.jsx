import { createContext, useContext, useState } from "react";

// Create Context
const SearchBar = createContext();

// Custom hook to use search context
export const useSearch = () => {
  const context = useContext(SearchBar);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// SearchProvider Component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchBar.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchBar.Provider>
  );
};
