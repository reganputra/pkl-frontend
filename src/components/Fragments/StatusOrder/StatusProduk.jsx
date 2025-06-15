import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance.js";
import Cookies from "js-cookie";
import IkonTruk from "../../Elements/Icons/Truk.jsx";
import IkonKotak from "../../Elements/Icons/Kotak.jsx";
import IkonCentang from "../../Elements/Icons/Centang.jsx";
import ListKirim from "./ListKirim.jsx";
import ListTunggu from "./ListTunggu.jsx";
import ListSelesai from "./ListSelesai.jsx";

function StatusProduk() {
  const [aktif, setAktif] = useState(1);
  const [ulang, setUlang] = useState(false);

  const handleBuatPO = async () => {
    try {
      const token = Cookies.get("token");
      await axiosInstance.post(
        "/po",
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      );
      alert("PO baru sudah berhasil dibuat !!");
      setUlang((prev) => !prev);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      <div
        className={`relative flex w-screen flex-col bg-[#F5F5F5] md:w-auto md:items-end md:pt-30 ${aktif != 1 && "pb-13"}`}
      >
        <div className="flex w-screen justify-evenly bg-white py-4 text-black md:justify-center md:gap-20">
          <div
            className="flex flex-col items-center"
            onClick={() => setAktif(1)}
          >
            <IkonKotak
              warna={aktif == 1 ? "red" : "black"}
              ukuran={"size-[10vw] md:size-12"}
            />
            <p>Pending</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setAktif(2)}
          >
            <IkonTruk
              warna={aktif == 2 ? "red" : "black"}
              ukuran={"size-[10vw] md:size-12"}
            />
            <p>Dikirim</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setAktif(3)}
          >
            <IkonCentang
              warna={aktif == 3 ? "red" : "black"}
              ukuran={"size-[10vw] md:size-12"}
            />
            <p>Selesai</p>
          </div>
        </div>

        {aktif == 1 && (
          <button
            onClick={handleBuatPO}
            className="m-5 w-fit place-self-end rounded-2xl bg-[#BC303E] px-14 py-1.5 text-2xl font-bold md:my-5 md:mr-10 md:place-self-auto md:px-20 md:py-2"
          >
            Buat PO
          </button>
        )}
      </div>

      {aktif == 1 && <ListTunggu ulang={ulang} />}
      {aktif == 2 && <ListKirim />}
      {aktif == 3 && <ListSelesai />}

      <div className="hidden bg-[#F5F5F5] pt-20 md:block"></div>
    </>
  );
}
export default StatusProduk;
