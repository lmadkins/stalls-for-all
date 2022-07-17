import React from 'react';
import { useState } from 'react';

const ResultsPage = ({resultsState}) => {
  return (
    <div>
      <h2>Results Page</h2>
      {resultsState}
    </div>
  );
};

export default ResultsPage;