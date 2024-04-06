import React, { useState } from 'react';
import './styles.css'
const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
    />
  );
};

const ResultBox = ({ results,resultFileHandler }) => {
  return (
    <div className="result-box">
    <h2>Live Results:</h2>
    <ul>
      {results.map((item, index) => {
        const foodname=resultFileHandler(item)
       return( 
        <li className="result-item" key={index} onClick={foodname} >
          {item}
          </li>
      )})}
    </ul>
  </div>
  );
};

const SearchWithResultBox = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search with Result Box</h1>
      <SearchBar data={data} onSearch={handleSearch} />
      <ResultBox results={searchResults} />
    </div>
  );
};

export default SearchWithResultBox;