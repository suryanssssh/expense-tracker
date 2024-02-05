import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/kcal-tracker/Tracker";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact element={<Tracker />} path="/tracker" />
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
