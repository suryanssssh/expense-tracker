import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/kcal-tracker/Tracker";
import Login from "./pages/auth/Login";
import Navbar from "./components/NavBar";
import { useState, useEffect } from "react";
import { FoodContext } from "./context/FoodContext";
import { motion } from "framer-motion";
import Popup from "./pages/kcal-tracker/components/popup/PopUp";
function App() {
  //custom mouse cursor
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  //public states
  const [foodName, setFoodName] = useState("");
  const [kcal, setKcal] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [fibers, setFibers] = useState();
  const [fat, setFat] = useState();
  const [quantity, setQuantity] = useState(1);
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
          quantity,
          setQuantity,
        }}
      >
        <Router>
          <Routes>
            <Route exact element={<Tracker />} path="/tracker" />
            <Route element={<Login />} path="/" />
            <Route element={<Popup />} path="/modal" />
          </Routes>
        </Router>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </FoodContext.Provider>
    </div>
  );
}

export default App;
