import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ListRiwayat from "./ListRiwayat";
import HalamanKustom from "../../Elements/Halaman";
import axiosInstance from "../../../api/axiosinstance";

function Saring() {
  const [riwayat, setRiwayat] = useState(null);
  const [tahun, setTahun] = useState(2025);
  const [bulan, setBulan] = useState(1);
  const [halaman, setHalaman] = useState(1);

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const response = await axiosInstance.get("/riwayat", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: Cookies.get("token"),
          },
          params: { page: halaman },
        });
        setRiwayat(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchRiwayat();
  }, [halaman]);

  const handleKirim = async (e) => {
    e.preventDefault();
    const fetchSaring = async () => {
      try {
        const response = await axiosInstance.get(`/riwayat/${tahun}/${bulan}`, {
          headers: { Authorization: Cookies.get("token") },
        });
        setRiwayat(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchSaring();
  };

  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleKirim}
        className="flex flex-col items-center justify-center gap-5 bg-[#F5F5F5] py-10 md:flex-row"
      >
        <div className="flex flex-wrap justify-center gap-5">
          <select
            name="bulan"
            id="bulan"
            className="w-40 rounded border bg-white px-6 py-2 text-center text-black"
            onChange={(e) => setBulan(e.target.value)}
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
            name="tahun"
            id="tahun"
            className="w-40 rounded border bg-white px-6 py-2 text-center text-black"
            onChange={(e) => setTahun(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-40 rounded-lg border bg-white px-10 py-2 font-bold text-black md:w-auto"
        >
          Cari
        </button>
      </form>

      {riwayat && <ListRiwayat data={riwayat.data} />}

      <HalamanKustom
        sekarang={halaman}
        total={riwayat?.totalPages}
        ubah={(x) => setHalaman(x)}
      />
    </>
  );
}
export default Saring;
