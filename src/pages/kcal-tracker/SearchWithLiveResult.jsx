import React, { useState } from 'react';
import './SearchBar.css'
import { useContext } from 'react';
import { FoodContext } from "../../context/FoodContext";
import Popup from './components/popup/PopUp';
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
  //use context for autofill function 
  const { foodName,
    setFoodName,
    kcal,
    setKcal,
    protein,
    setProtein,
    carbs,
    setCarbs,
    fibers,
    setFibers,
    fat,
    setFat,
    quantity,
    setQuantity

  } = useContext(FoodContext)
  // //this function is to update the state of add button 
  // const AutoFillHandler = (item) => {

  //   setFoodName(item.foodName)
  //   setKcal(item.kcal)
  //   setProtein(item.protein)
  //   setCarbs(item.carbs)
  //   setFibers(item.fibers)
  //   setFat(item.fat)
  //   console.log(item.kcalDate)


  // }
  return (
    <div className='result-box'>
      <h2>Live Results:</h2>
      <ul>
        {results.map((item, index) => (
          <li key={index} className='result-list' >   <Popup item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchWithLiveResult = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    //filtering to only one quanity inputs 
    const oneQuantityResults = data.filter(item => {
      if (Number(item.quantity) == 1) {
        return (item)
      }
    }
    );

    //filtering accounding to input 
    const filteredResults = oneQuantityResults.filter(item =>
      item.foodName.toLowerCase().includes(query.toLowerCase())
    );

    //for removing duplicates by foodName
    const ids = filteredResults.map(({ foodName }) => foodName);
    const noDuplicateResults = filteredResults.filter(({ foodName }, index) =>
      !ids.includes(foodName, index + 1));

    setSearchResults(noDuplicateResults);
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