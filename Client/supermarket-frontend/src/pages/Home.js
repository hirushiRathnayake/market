import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import Deals from '../components/Deals';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Deals />
      <Footer />
    </>
  );
};

export default Home;
