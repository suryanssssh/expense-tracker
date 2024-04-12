import React, { useState } from 'react'
import './foodBoxStyle.css'

const FoodBox = ({ kcalDb }) => {
  let totalProtein = 0;
  let totalkcal = 0
  let totalCarbs = 0;
  let totalFibers = 0;
  return (
    <div className='card-container'>
      {
        kcalDb.map((element) => {
          const { foodName, kcal, protein, carbs, fibers, fat, kcalDate } = element

          const date = new Date();

          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          // This arrangement can be altered based on how we want the date's format to appear.
          let currentDate = `${month}/${day}/${year}`;
          if (currentDate == kcalDate) {
            totalkcal = totalkcal + Number(kcal);
            totalProtein = totalProtein + Number(protein)
            totalCarbs = totalCarbs + Number(carbs)
            totalFibers = totalFibers + Number(fibers)

            console.log(`this is the total kcal of today: ${totalkcal}`)
            return (
              <div className='card'>
                <img src='https://lh3.googleusercontent.com/a/ACg8ocKotQBTCRIQPRY8O2np_z9rc-pYj1ha7Uea8rWxFlZ2Kmk=s96-c' />
                <div className="card-content">
                  <h3>{foodName}</h3>
                  <p>KCAL : {kcal}</p>
                  <p>Protein : {protein}</p>
                  <p>Carbohydrates : {carbs}</p>
                </div>
              </div>
            )
          }
        }
        )}
      <div>
        <h1>Total Kcal of today       {totalkcal}</h1>
        <h1>Total Protein of today {totalProtein}</h1>
        <h1>Total carbs today {totalCarbs}</h1>
        <h1>Total Fibers today {totalFibers}</h1>
      </div>
    </div>


  )
}

export default FoodBox