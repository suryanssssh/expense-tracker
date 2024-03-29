import React from 'react';
import SearchWithLiveResult from './SearchWithLiveResult';

const App = () => {
  const data = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];

  return (
    <div>
      <SearchWithLiveResult data={data} />
    </div>
  );
};

export default App;