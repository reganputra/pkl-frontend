import { Routes, Route } from "react-router-dom";
import "./App.css";
import HalamanUtama from "./Pages/HalamanUtama";
import HalamanMasuk from "./Pages/HalamanMasuk";
import HalamanDaftar from "./Pages/HalamanDaftar";
import HalamanRiwayat from "./Pages/HalamanRiwayat";
import HalamanStatusPesanan from "./Pages/HalamanStatusPesanan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HalamanMasuk />}></Route>
        <Route path="/daftar" element={<HalamanDaftar />}></Route>
        <Route path="/rumah" element={<HalamanUtama />}></Route>
        <Route path="/status" element={<HalamanStatusPesanan />}></Route>
        <Route path="/riwayat" element={<HalamanRiwayat />}></Route>
      </Routes>
    </>
  );
}

export default App;
