import React, { useState, useContext, useEffect } from 'react'
import './foodBoxStyle.css'
import { FoodContext } from '../../../context/FoodContext';
// import FoodImage from './FoodImage';

const FoodBox = ({ kcalDb }) => {
  let totalProtein = 0;
  let totalkcal = 0
  let totalCarbs = 0;
  let totalFibers = 0;

  //state to use this everywhere
  const { currentDate, setCurrentDate } = useContext(FoodContext)


  //getting unqiue dates
  let uniqueValues = {};

  let uniqueDates = kcalDb.filter(obj => {
    if (!uniqueValues[obj.kcalDate]) {
      uniqueValues[obj.kcalDate] = true;
      return true;
    }
    return false;
  });
  //get cards
  const getCards = () => {
    return (
      kcalDb.map((element) => {
        const { foodName, kcal, protein, carbs, fibers, fat, kcalDate, quantity } = element
        //state to use this everywhere
        // const { currentDate, setCurrentDate } = useContext(FoodContext)

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        setCurrentDate(`${month}/${day}/${year}`)
        console.log('when this is running')
        if (currentDate == kcalDate) {
          totalkcal = totalkcal + Number(kcal);
          totalProtein = totalProtein + Number(protein)
          totalCarbs = totalCarbs + Number(carbs)
          totalFibers = totalFibers + Number(fibers)

          console.log(`this is the total kcal of today: ${totalkcal}`)
          return (
            <div className='card'>
              {/* <FoodImage foodName={foodName} /> */}
              {/* <img src='https://lh3.googleusercontent.com/a/ACg8ocKotQBTCRIQPRY8O2np_z9rc-pYj1ha7Uea8rWxFlZ2Kmk=s96-c' /> */}
              <div className="card-content">
                <h3>{foodName}</h3>
                <p>KCAL : {kcal}</p>
                <p>Protein : {protein}</p>
                <p>Carbohydrates : {carbs}</p>
                <p>Quantity : {quantity}</p>

              </div>
            </div>
          )
        }
      }
      )
    )
  }


  console.log(uniqueDates);
  const changeDateHandler = (e, kcalDate) => {
    e.preventDefault()
    setCurrentDate(kcalDate)
  }
  return (
    <div className='card-container'>
      {
        // useEffect(() => {
        getCards()
        // }, [getCards])

      }
      <div>
      </div>
      <div>
        <h1>Total Kcal of today       {totalkcal}</h1>
        <h1>Total Protein of today {totalProtein}</h1>
        <h1>Total carbs today {totalCarbs}</h1>
        <h1>Total Fibers today {totalFibers}</h1>
      </div>
      < div className="button-container" >
        {
          uniqueDates.map((element) => {

            const { kcalDate } = element
            return (
              <button onClick={(e) => changeDateHandler(e, kcalDate)} >{kcalDate}</button>
            )
          }
          )}
      </div>
    </div >
  )
}

export default FoodBox