import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import HistoryList from "./HistoryList";
import Cookies from "js-cookie";
import CustomPagination from "../../Elements/Pagination";

function Filter() {
  const [history, setHistory] = useState(null);
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axiosInstance.get("/riwayat", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: Cookies.get("token"),
          },
          params: { page: page },
        });
        setHistory(response.data.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchHistory();
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchFilter = async () => {
      try {
        const response = await axiosInstance.get(`/riwayat/${year}/${month}`, {
          headers: { Authorization: Cookies.get("token") },
        });
        setHistory(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchFilter();
  };

  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-center py-10 bg-[#F5F5F5] gap-5"
      >
        <select
          name="month"
          id="month"
          className="bg-white text-black py-2 px-6 rounded border text-center w-40"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="01">Januari</option>
          <option value="02">Februari</option>
          <option value="03">Maret</option>
          <option value="04">April</option>
          <option value="05">Mei</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">Agustus</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>

        <select
          name="year"
          id="year"
          className="bg-white text-black py-2 px-6 rounded border text-center w-40"
          onChange={(e) => setYear(e.target.value)}
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

      <CustomPagination
        current={page}
        total={history?.totalPages}
        onChange={(x) => setPage(x)}
      />

      <div className="bg-[#F5F5F5] pt-20"></div>
    </>
  );
}
export default Filter;
