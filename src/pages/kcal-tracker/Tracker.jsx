import React, { useState } from "react";
import { useAddKcal } from "../../hooks/useAddKcal";
import { useGetKcal } from "../../hooks/useGetKcal";
import FoodBox from "./FoodBox";
import NavBar from "../../components/NavBar";
const Tracker = () => {
  const { addKcal } = useAddKcal();
  //getting value from getkcal hook,extracter from db
  const {kcalDb} =useGetKcal()
  //states for inputs
  const  [foodName, setFoodName] = useState("");
  const [kcal, setKcal]  = useState();
  const [protein, setProtein]  = useState();
  const  [carbs, setCarbs]  = useState();
  const [fibers, setFibers]  = useState();
  const  [fat, setFat]  = useState();
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
  return (
    <div>
            <NavBar/>

      <form onSubmit={onSubmit}>
        {localStorage.getItem("auth")}
        <h1>ADD KCAL ;p</h1>
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
