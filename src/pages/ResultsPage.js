import React from 'react';
// import { useState } from 'react';
import ResultCard from '../components/ResultCard';

const ResultsPage = ({ data, results, lastSearch }) => {
  return (
    <div>
      <h2>Results for: {lastSearch}</h2>
      <ResultCard 
      data={data}
      results={results}
      />
    </div>
  );
};

export default ResultsPage;