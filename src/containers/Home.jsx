import React from "react";
import ListCountry from "../components/countries/ListCountry";
import Search from "../components/filters/Search";

const Home = () => {
  return (
    <>
      <Search />
      <ListCountry />
    </>
  );
};

export default Home;
