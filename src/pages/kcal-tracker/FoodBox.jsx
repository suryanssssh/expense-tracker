import React from 'react'

const FoodBox = ({foodName,kcal,protein,carbs}) => {
    console.log(foodName)
  return (
    <div>
        <ul>
                    <li><h2> foodName {foodName}</h2></li>
                    <li><h4>{kcal}</h4></li>
                    <li><h4>{protein}</h4></li>
                    <li><h4>{carbs}</h4></li>

        </ul>
    </div>
  )
}

export default FoodBox