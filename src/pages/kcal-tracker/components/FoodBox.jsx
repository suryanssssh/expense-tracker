import React, { useState, useContext, useEffect, useRef } from 'react';
import './foodBoxStyle.css';
import { FoodContext } from '../../../context/FoodContext';
// import FoodImage from './FoodImage';

const FoodBox = ({ kcalDb }) => {
  let totalProtein = 0;
  let totalkcal = 0;
  let totalCarbs = 0;
  let totalFibers = 0;

  const { currentDate, setCurrentDate } = useContext(FoodContext);
  const buttonContainerRef = useRef(null);

  // Extract unique dates
  const uniqueDates = Array.from(new Set(kcalDb.map(item => item.kcalDate)));

  // Set current date to today's date on mount
  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setCurrentDate(`${month}/${day}/${year}`);
  }, [setCurrentDate]);

  // Scroll to the rightmost position on mount
  useEffect(() => {
    if (buttonContainerRef.current) {
      buttonContainerRef.current.scrollLeft = buttonContainerRef.current.scrollWidth;
    }
  }, [uniqueDates]);

  // Calculate totals for the current date
  const getCards = () => {
    return kcalDb
      .filter(element => element.kcalDate === currentDate)
      .map((element, index) => {
        const { foodName, kcal, protein, carbs, fibers, quantity } = element;

        totalkcal += Number(kcal);
        totalProtein += Number(protein);
        totalCarbs += Number(carbs);
        totalFibers += Number(fibers);

        return (
          <div key={index} className='card'>
            {/* <FoodImage foodName={foodName} /> */}
            <div className="card-content">
              <h3>{foodName}</h3>
              <p>KCAL : {kcal}</p>
              <p>Protein : {protein}</p>
              <p>Carbohydrates : {carbs}</p>
              <p>Quantity : {quantity}</p>
            </div>
          </div>
        );
      });
  };

  const changeDateHandler = (e, kcalDate) => {
    e.preventDefault();
    setCurrentDate(kcalDate);
  };

  const scrollLeft = (e) => {
    e.preventDefault()
    buttonContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = (e) => {
    e.preventDefault()
    buttonContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className='card-container'>
      <div className='cards-wrapper'>
        {getCards()}
      </div>
      <div>
        <h1>Total Kcal of today: {totalkcal}</h1>
        <h1>Total Protein of today: {totalProtein}</h1>
        <h1>Total Carbs today: {totalCarbs}</h1>
        <h1>Total Fibers today: {totalFibers}</h1>
      </div>
      <div className="scroll-wrapper">
        <button className="scroll-button" onClick={(e)=>scrollLeft(e)}>{"<"}</button>
        <div className="button-container" ref={buttonContainerRef}>
          {uniqueDates.map((kcalDate, index) => (
            <button key={index} onClick={(e) => changeDateHandler(e, kcalDate)}>
              {kcalDate}
            </button>
          ))}
        </div>
        <button className="scroll-button" onClick={(e)=>scrollRight(e)}>{">"}</button>
      </div>
    </div>
  );
};

export default FoodBox;
