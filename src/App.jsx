import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import StatusOrderPage from "./Pages/StatusOrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/status" element={<StatusOrderPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
