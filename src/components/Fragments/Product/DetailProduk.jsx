import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import KonfirmasiHapus from "./KonfirmasiHapus";

function DetailProduk({ data, padaPerbaruiStok, handlePilih }) {
  const [hitung, setHitung] = useState(0);
  const [tampilKonfirmasiHapus, setTampilKonfirmasiHapus] = useState(false);

  function handlePerbaruiStock() {
    const PerbaruiStock = async () => {
      try {
        const response = await axiosInstance.patch(
          `/items/${data._id}/update-quantity`,
          { quantity: hitung },
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          },
        );
        alert("Stock berhasil diupdate");
        padaPerbaruiStok();
        setHitung(0);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    PerbaruiStock();
  }

  function handleKonfirmasiHapus() {
    setTampilKonfirmasiHapus(false);
    const HapusProduk = async () => {
      try {
        const response = await axiosInstance.delete(`/items/${data._id}`, {
          headers: {
            Authorization: Cookies.get("token"),
          },
        });
        alert("Produk berhasil dihapus !!");
        padaPerbaruiStok();
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    HapusProduk();
  }

  function handleBatalHapus() {
    setTampilKonfirmasiHapus(false);
    alert("Produk tidak jadi dihapus !!");
  }

  return (
    <>
      <div className="flex w-9/12 flex-col items-center justify-around gap-3 overflow-hidden rounded border bg-white p-6 px-7 text-black md:flex-row md:gap-0">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:w-auto md:flex-row md:gap-0">
          <img
            src={data.image}
            alt=""
            className="w-60 object-contain shadow md:mr-4 md:w-44"
          />
          <div className="flex w-full flex-col font-bold md:w-auto">
            <p className="text-[25px]/9 md:w-80">{data.name}</p>
            <p className="text-[18px] md:text-[16px]">
              {data.ukuranKemasan} ML
            </p>
            <p className="text-[18px] text-[#BC303E]">{data.kodeBarang}</p>
          </div>
        </div>

        <div className="justify-centers flex flex-col items-center gap-3 md:items-end">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[20px] text-[#BC303E]">Stok : {data.quantity}</p>
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => setHitung(hitung - 1)}
                className="!h-5 w-5 cursor-pointer rounded-4xl bg-[#D9D9D9] p-1"
              />
              <span className="rounded border-2 border-[#BC303E] px-7 text-[20px]">
                {hitung}
              </span>
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setHitung(hitung + 1)}
                className="!h-5 w-5 cursor-pointer rounded-4xl bg-[#BC303E] p-1 text-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => setTampilKonfirmasiHapus(true)}
              className="!h-[4.5vw] cursor-pointer rounded border-2 border-[#BC303E] p-1 text-[#BC303E] md:!h-7.5"
            />
            <button
              onClick={() => handlePilih(data)}
              className="rounded border-2 border-[#BC303E] bg-white px-3 py-1 text-[3vw] whitespace-nowrap text-[#BC303E] md:text-[20px]"
            >
              Edit Produk
            </button>
            <button
              onClick={handlePerbaruiStock}
              className="rounded border-2 border-[#BC303E] bg-[#BC303E] px-3 py-1 text-[3vw] whitespace-nowrap text-white md:text-[20px]"
            >
              Perbarui Stok
            </button>
          </div>
        </div>
      </div>

      {tampilKonfirmasiHapus && (
        <KonfirmasiHapus
          tutupKonfirmasiHapus={() => setTampilKonfirmasiHapus(false)}
          konfirmasi={() => handleKonfirmasiHapus()}
          batal={() => handleBatalHapus()}
        />
      )}
    </>
  );
}
export default DetailProduk;
