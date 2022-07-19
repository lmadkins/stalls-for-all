import React from 'react';

const ResultsCard = ({ listings }) => {
  return (
    <div className='resultsContainer'>
      {listings}
    </div>
  );
};

export default ResultsCard;