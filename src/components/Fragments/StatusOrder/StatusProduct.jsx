import { useState } from "react";
import BoxIcon from "../../Elements/icons/box";
import CheckIcon from "../../Elements/icons/check";
import TruckIcon from "../../Elements/icons/truck";
import PendingList from "./PendingList";
import SendingList from "./SendingList";
import DoneList from "./DoneList";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function StatusProduct() {
  const [active, setActive] = useState(1);

  const handleCreatePO = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axiosInstance.post(
        "/po",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("PO baru sudah berhasil dibuat !!");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      <div
        className={`bg-[#F5F5F5] pt-30 relative flex-col flex items-end ${active != 1 && "pb-13"}`}
      >
        <div className="flex justify-center gap-20 py-4 text-black bg-white w-screen">
          <div
            className="flex flex-col items-center"
            onClick={() => setActive(1)}
          >
            <BoxIcon color={active == 1 ? "red" : "black"} size={"size-12"} />
            <p>Pending</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setActive(2)}
          >
            <TruckIcon color={active == 2 ? "red" : "black"} size={"size-12"} />
            <p>Dikirim</p>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setActive(3)}
          >
            <CheckIcon color={active == 3 ? "red" : "black"} size={"size-12"} />
            <p>Selesai</p>
          </div>
        </div>

        {active == 1 && (
          <button
            onClick={handleCreatePO}
            className="bg-[#BC303E] rounded-2xl py-2 px-20 font-bold text-2xl w-fit my-5 mr-10"
          >
            Buat PO
          </button>
        )}
      </div>

      {active == 1 && <PendingList />}
      {active == 2 && <SendingList />}
      {active == 3 && <DoneList />}

      <div className="bg-[#F5F5F5] pt-20"></div>
    </>
  );
}
export default StatusProduct;
