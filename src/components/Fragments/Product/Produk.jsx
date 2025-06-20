import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DetailProduk from "./DetailProduk";
import TambahProduk from "./TambahProduk";
import HalamanKustom from "../../Elements/Halaman";
import axiosInstance from "../../../api/axiosinstance";

function Produk() {
  const [tampilTambahkanProduk, setTampilTambahkanProduk] = useState(false);
  const [dataTerpilih, setDataTerpilih] = useState(null);
  const [produk, setProduk] = useState(null);
  const [perbaruiProduk, setPerbaruiProduk] = useState(false);
  const [halaman, setHalaman] = useState(1);

  const handleEditProduk = (x) => {
    setTampilTambahkanProduk(true);
    setDataTerpilih(x);
  };

  const handleTutupEdit = () => {
    setTampilTambahkanProduk(false);
    setDataTerpilih(null);
  };

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await axiosInstance.get("/items", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: halaman },
        });
        console.log(response);
        setProduk(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchProduk();
  }, [perbaruiProduk, halaman]);

  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center gap-8 bg-white py-14 text-[#BC303E] md:py-28">
        <h1 className="text-center text-5xl font-bold md:text-left">
          Manajemen Produk
        </h1>
        <button
          className="mb-9 rounded-xl bg-[#BC303E] px-12 py-2 text-[20px] font-bold text-white"
          onClick={() => setTampilTambahkanProduk(true)}
        >
          Tambahkan Produk
        </button>
        {produk?.data?.map((product) => (
          <DetailProduk
            data={product}
            key={product._id}
            handlePilih={handleEditProduk}
            padaPerbaruiStok={() => setPerbaruiProduk(!perbaruiProduk)}
          />
        ))}
      </div>

      <HalamanKustom
        sekarang={halaman}
        total={produk?.totalPages}
        ubah={(x) => setHalaman(x)}
      />

      {tampilTambahkanProduk && (
        <TambahProduk
          tutupTambahProduk={() => handleTutupEdit()}
          ulang={() => setPerbaruiProduk(!perbaruiProduk)}
          data={dataTerpilih}
        />
      )}
    </>
  );
}
export default Produk;
