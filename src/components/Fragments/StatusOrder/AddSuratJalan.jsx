import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function AddSuratJalan({ closeAddSuratJalan }) {
  const [suratJalan, setSuratJalan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/surat-jalan",
        { noSuratJalan: suratJalan },
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        }
      );
      console.log(suratJalan);
      console.log(response);
      alert("Barang sudah dikirim !!");
      closeAddSuratJalan();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeAddSuratJalan()}
      ></div>

      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        className="relative flex flex-col bg-white justify-center items-center text-black border gap-3 w-fit p-8 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex self-end !h-6 cursor-pointer"
          onClick={() => closeAddSuratJalan()}
        />
        <p className="text-[#BC303E] text-3xl font-bold">No Surat Jalan</p>
        <input
          type="text"
          name="SJalan"
          onChange={(e) => setSuratJalan(e.target.value)}
          className="border-2 rounded-lg p-1 w-96 text-center"
        />
        <input
          type="submit"
          value="Verifikasi"
          className="bg-[#BC303E] text-white rounded px-10 py-2 font-bold mt-4"
        />
      </form>
    </div>
  );
}

export default AddSuratJalan;
