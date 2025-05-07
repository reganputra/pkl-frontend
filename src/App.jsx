import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HistoryPage from "./Pages/HistoryPage";
import StatusOrderPage from "./Pages/StatusOrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/daftar" element={<SignupPage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/status" element={<StatusOrderPage />}></Route>
        <Route path="/riwayat" element={<HistoryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
