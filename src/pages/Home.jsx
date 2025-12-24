import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import Container from "../components/Container";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />

      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
    </>
  );
};

export default Home;
