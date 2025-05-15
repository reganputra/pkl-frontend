import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function AddProduct({ closeAddProduct, refresh }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const [formValue, setFormValue] = useState({
    name: "",
    kodeBarang: "",
    quantity: "",
    category: "",
    ukuranKemasan: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);
    Object.entries(formValue).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axiosInstance.post("/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("token"),
        },
      });

      alert("Produk berhasil ditambahkan");
      console.log("success", response.data);

      setFormValue({
        name: "",
        kodeBarang: "",
        quantity: "",
        category: "",
        ukuranKemasan: "",
      });
      setSelectedImage(null);
      setPreview(null);
      closeAddProduct();
      refresh();
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
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeAddProduct()}
      ></div>

      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        className="relative flex w-4/5 flex-col items-center justify-center gap-0 rounded border bg-white p-4 text-black md:gap-3 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex !h-6 cursor-pointer self-end"
          onClick={() => closeAddProduct()}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        <div
          onClick={triggerFileInput}
          className="flex max-h-20 min-h-15 min-w-15 cursor-pointer items-center justify-center rounded border-2 md:max-h-40 md:min-h-20 md:min-w-20"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full rounded object-cover"
            />
          ) : (
            <span>+</span>
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
                onChange={(e) =>
                  setFormValue((prev) => ({
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
                onChange={(e) =>
                  setFormValue((prev) => ({
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
                onChange={(e) =>
                  setFormValue((prev) => ({
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
                onChange={(e) =>
                  setFormValue((prev) => ({
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
            type="text"
            name="ukuranKemasan"
            id="ukuranKemasan"
            onChange={(e) =>
              setFormValue((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            className="h-9 w-60 rounded-lg border-2 border-black px-2 md:h-10 md:w-96"
          />
        </div>
        <button
          type="submit"
          disabled={!selectedImage || !formValue.name}
          className="mt-4 rounded bg-[#BC303E] px-12 py-2 font-bold text-white disabled:opacity-50"
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
