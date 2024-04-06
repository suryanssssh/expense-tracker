import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/kcal-tracker/Tracker";
import Login from "./pages/auth/Login";
import Navbar from "./components/NavBar";
import { useState } from "react";
import { FoodContext } from "./context/FoodContext";
function App() {
  const [foodName, setFoodName] = useState("");
  const [kcal, setKcal] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [fibers, setFibers] = useState();
  const [fat, setFat] = useState();
  return (
    <div className="App">
      <FoodContext.Provider
        value={{
          foodName,
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
        }}
      >
        <Router>
          <Routes>
            <Route exact element={<Tracker />} path="/tracker" />
            <Route element={<Login />} path="/" />
          </Routes>
        </Router>
      </FoodContext.Provider>
    </div>
  );
}

export default App;
