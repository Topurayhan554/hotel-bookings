import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import Container from "../components/Container";
import ExclusiveOffers from "../components/ExclusiveOffers";

const Home = () => {
  return (
    <>
      <Hero />

      <FeaturedDestination />
      <ExclusiveOffers />
    </>
  );
};

export default Home;
