import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import StatusOrderPage from "./Pages/StatusOrderPage";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/daftar" element={<SignupPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/status" element={<StatusOrderPage />}></Route>
        <Route path="/riwayat" element={<HistoryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
