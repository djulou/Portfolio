//import { useState, useEffect, useRef } from 'react';
//import portfolioData from './data/data.json';

//import { PortfolioData } from './data/types.ts';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  //const data: PortfolioData = portfolioData;

  return (
    <>
      <Header />
      <main>
        <Hero />
        
      </main>
    </>
  );
};

export default App;
