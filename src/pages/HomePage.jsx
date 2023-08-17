import React, { useState } from "react";
import Header from "../components/layout/Header";
import SearchInput from "../utilities/SearchInput";
import Card from "../components/card/Card";
import Footer from "../components/layout/Footer";
import { usePageContext } from "../context/PageContext";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { setData } = usePageContext();
  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <Header />
      <SearchInput onSearch={handleSearch} />
      <Card searchResults={searchResults} />
      <Footer />
    </>
  );
};

export default HomePage;
