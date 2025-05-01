import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";
import axiosInstance from "../../../api/axiosinstance";

function PendingList() {
  const [pendingList, setPendingList] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/items", {});
        setPendingList(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      <PendingCard />
      <PendingCard />
    </div>
  );
}
export default PendingList;
