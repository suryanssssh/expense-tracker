import React, { useState } from 'react';

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

const LiveResultBar = ({ results }) => {
  return (
    <div>
      <h2>Live Results:</h2>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const SearchWithLiveResult = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search with Live Result Bar</h1>
      <SearchBar data={data} onSearch={handleSearch} />
      <LiveResultBar results={searchResults} />
    </div>
  );
};

export default SearchWithLiveResult