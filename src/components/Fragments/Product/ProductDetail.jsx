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
          }
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
      <div className="flex rounded bg-white border text-black justify-around items-center p-6 px-7 w-9/12">
        <div className="flex justify-center items-center">
          <img
            src={data.image}
            alt=""
            className="w-44 object-contain shadow mr-4"
          />
          <div className="flex flex-col font-bold">
            <p className="text-[25px]/9 w-80">{data.name}</p>
            <p className="text-[16px]">{data.ukuranKemasan} ML</p>
            <p className="text-[#BC303E] text-[18px]">{data.kodeBarang}</p>
          </div>
        </div>

        <div className="flex flex-col justify-centers items-end gap-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[#BC303E] text-[20px]">
              Stock : {data.quantity}
            </p>
            <div className="flex gap-3 justify-center items-center">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => setCount(count - 1)}
                className="rounded-4xl bg-[#D9D9D9] p-1 cursor-pointer w-5 !h-5"
              />
              <span className="border-2 rounded border-[#BC303E] px-7 text-[20px]">
                {count}
              </span>
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setCount(count + 1)}
                className="rounded-4xl bg-[#BC303E] p-1 cursor-pointer text-white  w-5 !h-5"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => setShowDeleteConfirm(true)}
              className="text-[#BC303E] border-2 border-[#BC303E] rounded p-1 !h-7.5 cursor-pointer"
            />
            <button className="bg-white border-2 border-[#BC303E] text-[#BC303E] rounded px-3 py-1 text-[20px] whitespace-nowrap">
              Edit Produk
            </button>
            <button
              onClick={handleUpdateStock}
              className="bg-[#BC303E] border-2 border-[#BC303E] text-white rounded px-3 py-1 text-[20px] whitespace-nowrap"
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
