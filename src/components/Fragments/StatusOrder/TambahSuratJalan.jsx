import Cookies from "js-cookie";
import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TambahSuratJalan({ closeTambahSuratJalan }) {
  const [suratJalan, setSuratJalan] = useState("");

  const handleKirim = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/surat-jalan",
        { noSuratJalan: suratJalan },
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        },
      );
      console.log(suratJalan);
      console.log(response);
      alert("Barang sudah dikirim !!");
      closeTambahSuratJalan();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const handleTombolEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeTambahSuratJalan()}
      ></div>

      <form
        action=""
        method="post"
        onSubmit={handleKirim}
        onKeyDown={handleTombolEnter}
        className="relative flex w-fit flex-col items-center justify-center gap-3 rounded border bg-white p-8 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex !h-6 cursor-pointer self-end"
          onClick={() => closeTambahSuratJalan()}
        />
        <p className="text-3xl font-bold text-[#BC303E]">No Surat Jalan</p>
        <input
          type="text"
          name="SJalan"
          onChange={(e) => setSuratJalan(e.target.value)}
          className="w-70 rounded-lg border-2 p-1 text-center md:w-96"
        />
        <input
          type="submit"
          value="Verifikasi"
          className="mt-4 rounded bg-[#BC303E] px-10 py-2 font-bold text-white"
        />
      </form>
    </div>
  );
}

export default TambahSuratJalan;
