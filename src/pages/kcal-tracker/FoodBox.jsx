import React from 'react'
import './foodBoxStyle.css'

const FoodBox = ({kcalDb}) => {
  return (
  

<div className='card-container'>
        {kcalDb.map((element)=>{
        const {  foodName,kcal, protein,carbs,fibers,fat} =element
          return ( 
            <div className='card'>
            <img src='https://lh3.googleusercontent.com/a/ACg8ocKotQBTCRIQPRY8O2np_z9rc-pYj1ha7Uea8rWxFlZ2Kmk=s96-c'/>
            <div className="card-content">
              <h3>{foodName}</h3>
              <p>KCAL : {kcal}</p>
              <p>Protein : {protein}</p>
              <p>Carbohydrates : {carbs}</p>
            </div>
            </div>
          )
       })}
    </div>

   
  )
}

export default FoodBox