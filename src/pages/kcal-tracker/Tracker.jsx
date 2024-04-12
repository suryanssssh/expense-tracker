import React, { useContext, useState } from "react";
import { useAddKcal } from "../../hooks/useAddKcal";
import { useGetKcal } from "../../hooks/useGetKcal";
import FoodBox from "./FoodBox";
import NavBar from "../../components/NavBar";
import SearchWithLiveResult from './SearchWithLiveResult';
import { FoodContext } from "../../context/FoodContext";
const Tracker = () => {
  const { addKcal } = useAddKcal();
  //getting value from getkcal hook,extracter from db
  const {kcalDb} =useGetKcal()
  //states for inputs
  const {foodName,
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
    setFat}=useContext(FoodContext)


  const onSubmit = (e) => {
    e.preventDefault();
    addKcal({
      foodName,
      kcal,
      protein,
      carbs,
      fibers,
      fat
     } );
    setFoodName('')
    setKcal(0)
    setProtein(0)
    setCarbs(0)
    setFibers(0)
    setFat(0) 
  };
console.log(kcalDb)
const data = kcalDb.map((element)=>element)
    
//this is to filter data according to date
// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${month}/${day}/${year}`;

// const [todayKcal,setTodaykcal]=useState([])

//     // const {  foodName,kcal, protein,carbs,fibers,fat,kcalDate} =element;
//    const todayResult= kcalDb.filter(item =>
//       item.data.includes(date)
//     );
//     setTodaykcal(todayResult)
//     console.log('this is today kcals')
//     console.log(todayKcal)


  return (
    <div>
            <NavBar/>
            <SearchWithLiveResult data={data} />
      <form onSubmit={onSubmit}>
        {/* {localStorage.getItem("auth")} */}
        <h1>ADD Custom Food</h1>
        <input
        type="text"
          placeholder="ENTER FOOD NAME"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
        type="number"
          placeholder="ENTER KCAL"
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
        <input
        type="number"

placeholder="ENTER PROTEIN"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <input
        type="number"
placeholder="ENTER CARBS"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
        />
        <input
                type="number"
          placeholder="ENTER FIBERS"
          value={fibers}
          onChange={(e) => setFibers(e.target.value)}
        />
        <input
                type="number"
          placeholder="ENTER FAT"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />

        <button type="submit">ADD</button>
     
      <FoodBox kcalDb={kcalDb}/>
     
        
      </form>
    </div>
  );
};

export default Tracker;
