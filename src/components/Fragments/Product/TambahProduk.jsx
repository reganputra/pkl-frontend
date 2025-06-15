import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TambahProduk({ tutupTambahProduk, ulang, data }) {
  const [pratinjau, setPratinjau] = useState(null);
  const fileInputRef = useRef();
  const [nilaiForm, setNilaiForm] = useState({
    name: "",
    kodeBarang: "",
    quantity: "",
    category: "",
    ukuranKemasan: "",
  });
  const [gambarTerpilih, setGambarTerpilih] = useState(null);

  useEffect(() => {
    if (data) {
      setNilaiForm({
        name: data.name,
        kodeBarang: data.kodeBarang,
        quantity: data.quantity,
        category: data.category,
        ukuranKemasan: data.ukuranKemasan,
      });

      if (data.image) {
        setPratinjau(data.image);
      }
    }
  }, [data]);

  const handleUbahGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGambarTerpilih(file);
      const pratinjauUrl = URL.createObjectURL(file);
      setPratinjau(pratinjauUrl);
    }
  };

  const pemicuMasukanFile = () => {
    fileInputRef.current.click();
  };

  const handleKirim = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", gambarTerpilih);
    Object.entries(nilaiForm).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      tutupTambahProduk();
      alert("Mohon ditunggu, produk sedang ditambahkan");
      const response = await axiosInstance.post("/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("token"),
        },
      });

      alert("Produk berhasil ditambahkan");
      console.log("success", response.data);

      setNilaiForm({
        name: "",
        kodeBarang: "",
        quantity: "",
        category: "",
        ukuranKemasan: "",
      });
      setGambarTerpilih(null);
      setPratinjau(null);
      ulang();
    } catch (error) {
      alert("Produk gagal ditambahkan");
      console.log(error.response?.data || error.message);
    }
  };

  const handlePerbaruiKirim = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (gambarTerpilih) {
      formData.append("image", gambarTerpilih);
    }

    Object.entries(nilaiForm).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      tutupTambahProduk();
      alert("Mohon ditunggu, produk sedang diperbarui");
      const response = await axiosInstance.put(`/items/${data._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("token"),
        },
      });

      alert("Produk berhasil diperbarui");
      console.log("success", response.data);

      setNilaiForm({
        name: "",
        kodeBarang: "",
        quantity: "",
        category: "",
        ukuranKemasan: "",
      });
      setGambarTerpilih(null);
      setPratinjau(null);
      ulang();
    } catch (error) {
      alert("Produk gagal ditambahkan");
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
        onClick={() => tutupTambahProduk()}
      ></div>

      <form
        action=""
        method="post"
        onSubmit={data?._id ? handlePerbaruiKirim : handleKirim}
        onKeyDown={handleTombolEnter}
        className="relative flex w-4/5 flex-col items-center justify-center gap-0 rounded border bg-white p-4 text-black md:gap-3 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex !h-6 cursor-pointer self-end"
          onClick={() => tutupTambahProduk()}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleUbahGambar}
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        <div
          onClick={pemicuMasukanFile}
          className="flex cursor-pointer items-center justify-center rounded border-2"
        >
          {pratinjau ? (
            <img
              src={pratinjau}
              alt="pratinjau"
              className="h-20 w-full rounded object-cover md:h-30"
            />
          ) : (
            <span className="px-7 py-5">+</span>
          )}
        </div>

        <div className="flex flex-col gap-0 md:flex-row md:gap-3">
          <div className="flex flex-col gap-0 md:gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-[#BC303E]" htmlFor="NamaProduk">
                Nama Produk
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={nilaiForm.name || ""}
                onChange={(e) =>
                  setNilaiForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold text-[#BC303E]" htmlFor="KodeBarang">
                Kode Barang
              </label>
              <input
                type="text"
                name="kodeBarang"
                id="kodeBarang"
                value={nilaiForm.kodeBarang || ""}
                onChange={(e) =>
                  setNilaiForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
              />
            </div>
          </div>

          <div className="flex flex-col gap-0 md:gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-[#BC303E]" htmlFor="Kuantitas">
                Kuantitas
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                value={nilaiForm.quantity || ""}
                onChange={(e) =>
                  setNilaiForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold text-[#BC303E]" htmlFor="Kategori">
                Kategori
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={nilaiForm.category || ""}
                onChange={(e) =>
                  setNilaiForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-[#BC303E]" htmlFor="Ukuran">
            Ukuran
          </label>
          <input
            type="number"
            name="ukuranKemasan"
            id="ukuranKemasan"
            value={nilaiForm.ukuranKemasan || ""}
            onChange={(e) =>
              setNilaiForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
          />
        </div>
        <button
          type="submit"
          disabled={data?._id ? false : !gambarTerpilih || !nilaiForm.name}
          className="mt-4 rounded bg-[#BC303E] px-12 py-2 font-bold text-white disabled:opacity-50"
        >
          {data?._id ? "Kirim" : "Tambahkan"}
        </button>
      </form>
    </div>
  );
}

export default TambahProduk;
