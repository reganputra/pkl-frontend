import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function PendingList({ refresh }) {
  const [pendingData, setPendingData] = useState(null);

  useEffect(() => {
    const fetchSending = async () => {
      try {
        const response = await axiosInstance.get("/po/status/pending", {
          headers: { Authorization: Cookies.get("token") },
        });
        setPendingData(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchSending();
  }, [refresh]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {pendingData?.map((data, index) => (
          <PendingCard key={index} data={data} />
        ))}
      </div>
    </>
  );
}
export default PendingList;
