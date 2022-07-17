import React from 'react';
import { useState } from 'react';
import ResultCard from '../components/ResultCard';

const ResultsPage = ({results, data}) => {
  return (
    <div>
      <h2>Results Page</h2>
      <ResultCard 
      results={results}
      data={data}/>
      
    </div>
  );
};

export default ResultsPage;