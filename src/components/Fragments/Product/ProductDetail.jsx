import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import DeleteConfirm from "./DeleteConfirm";
import Cookies from "js-cookie";

function ProductDetail({ data, onUpdateStock }) {
  const [count, setCount] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function handleUpdateStock() {
    const updateStock = async () => {
      try {
        const response = await axiosInstance.patch(
          `/items/${data._id}/update-quantity`,
          { quantity: count },
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          },
        );
        alert("Stock berhasil diupdate");
        onUpdateStock();
        setCount(0);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    updateStock();
  }

  function handleConfirmDelete() {
    setShowDeleteConfirm(false);
    const deleteproduct = async () => {
      try {
        const response = await axiosInstance.delete(`/items/${data._id}`, {
          headers: {
            Authorization: Cookies.get("token"),
          },
        });
        alert("Produk berhasil dihapus !!");
        onUpdateStock();
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    deleteproduct();
  }

  function handleCancelDelete() {
    setShowDeleteConfirm(false);
    alert("Produk tidak jadi dihapus !!");
  }

  return (
    <>
      <div className="flex w-9/12 flex-col items-center justify-around gap-3 overflow-hidden rounded border bg-white p-6 px-7 text-black lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col items-center justify-center gap-3 lg:w-auto lg:flex-row lg:gap-0">
          <img
            src={data.image}
            alt=""
            className="w-60 object-contain shadow lg:mr-4 lg:w-44"
          />
          <div className="flex w-full flex-col font-bold lg:w-auto">
            <p className="text-[25px]/9 lg:w-80">{data.name}</p>
            <p className="text-[18px] lg:text-[16px]">
              {data.ukuranKemasan} ML
            </p>
            <p className="text-[18px] text-[#BC303E]">{data.kodeBarang}</p>
          </div>
        </div>

        <div className="justify-centers flex flex-col items-center gap-3 lg:items-end">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[20px] text-[#BC303E]">
              Stock : {data.quantity}
            </p>
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => setCount(count - 1)}
                className="!h-5 w-5 cursor-pointer rounded-4xl bg-[#D9D9D9] p-1"
              />
              <span className="rounded border-2 border-[#BC303E] px-7 text-[20px]">
                {count}
              </span>
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setCount(count + 1)}
                className="!h-5 w-5 cursor-pointer rounded-4xl bg-[#BC303E] p-1 text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => setShowDeleteConfirm(true)}
              className="!h-6 cursor-pointer rounded border-2 border-[#BC303E] p-1 text-[#BC303E] lg:!h-7.5"
            />
            <button className="rounded border-2 border-[#BC303E] bg-white px-3 py-1 whitespace-nowrap text-[#BC303E] lg:text-[20px]">
              Edit Produk
            </button>
            <button
              onClick={handleUpdateStock}
              className="rounded border-2 border-[#BC303E] bg-[#BC303E] px-3 py-1 whitespace-nowrap text-white lg:text-[20px]"
            >
              Update Stock
            </button>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <DeleteConfirm
          closeDeleteConfirm={() => setShowDeleteConfirm(false)}
          confirm={() => handleConfirmDelete()}
          cancel={() => handleCancelDelete()}
        />
      )}
    </>
  );
}
export default ProductDetail;
