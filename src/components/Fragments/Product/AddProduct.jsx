import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";

function AddProduct({ closeAddProduct }) {
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
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-20">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeAddProduct()}
      ></div>

      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="relative flex flex-col bg-white justify-center items-center text-black border gap-3 w-4/5 p-8 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex self-end !h-6 cursor-pointer"
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
          className="max-h-40 min-w-20 min-h-20 rounded border-2 cursor-pointer flex items-center justify-center"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <span>+</span>
          )}
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="NamaProduk">
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
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="KodeBarang">
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
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="Kuantitas">
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
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="Kategori">
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
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[#BC303E] font-bold" htmlFor="Ukuran">
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
            className="border-2 rounded-lg w-96 h-10 px-2 border-black"
          />
        </div>
        <button
          type="submit"
          disabled={!selectedImage || !formValue.name}
          className="bg-[#BC303E] text-white rounded px-12 py-2 font-bold mt-4 disabled:opacity-50"
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
