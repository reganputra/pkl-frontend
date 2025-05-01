import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import HistoryList from "./HistoryList";

function Filter() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axiosInstance.get("/riwayat", {});
        setHistory(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchHistory();
  }, []);

  return (
    <>
      <form
        action=""
        method="post"
        className="flex justify-center py-10 bg-[#F5F5F5] gap-5"
      >
        <select
          name="month"
          id="month"
          className="bg-white text-black py-2 px-6 rounded border text-center w-40"
          defaultValue="Bulan"
        >
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Maret</option>
          <option value="4">April</option>
          <option value="5">Mei</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>

        <select
          name="year"
          id="year"
          className="bg-white text-black py-2 px-6 rounded border text-center w-40"
          defaultValue="Tahun"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <button
          type="submit"
          className="bg-white text-black font-bold border py-2 px-10 rounded-lg"
        >
          Cari
        </button>
      </form>

      {history && <HistoryList data={history} />}

      <div className="bg-[#F5F5F5] pt-20"></div>
    </>
  );
}
export default Filter;
