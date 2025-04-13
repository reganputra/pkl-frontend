import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
