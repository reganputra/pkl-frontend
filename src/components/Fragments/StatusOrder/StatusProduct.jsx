import { useState } from "react";
import BoxIcon from "../../Elements/Icons/Box.jsx";
import CheckIcon from "../../Elements/Icons/Check.jsx";
import TruckIcon from "../../Elements/Icons/Truck.jsx";
import PendingList from "./PendingList";
import SendingList from "./SendingList";
import DoneList from "./DoneList";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function StatusProduct() {
  const [active, setActive] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const handleCreatePO = async () => {
    try {
      const token = Cookies.get("token");
      await axiosInstance.post(
          "/po",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
      );
      alert("PO baru sudah berhasil dibuat !!");
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      <div
        className={`relative flex w-screen flex-col bg-[#F5F5F5] md:w-auto md:items-end md:pt-30 ${active != 1 && "pb-13"}`}
      >
        <div className="flex w-screen justify-center gap-20 bg-white py-4 text-black">
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
            className="m-5 w-fit place-self-end rounded-2xl bg-[#BC303E] px-14 py-1.5 text-2xl font-bold md:my-5 md:mr-10 md:place-self-auto md:px-20 md:py-2"
          >
            Buat PO
          </button>
        )}
      </div>

      {active == 1 && <PendingList refresh={refresh} />}
      {active == 2 && <SendingList />}
      {active == 3 && <DoneList />}

      <div className="hidden bg-[#F5F5F5] pt-20 md:block"></div>
    </>
  );
}
export default StatusProduct;
