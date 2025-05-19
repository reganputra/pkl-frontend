import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";
import CustomPagination from "../../Elements/Pagination";

function PendingList({ refresh }) {
  const [pendingData, setPendingData] = useState(null);
  const [page, setPage] = useState(1);
  const [refresh1, setRefresh1] = useState(false);

  useEffect(() => {
    const fetchSending = async () => {
      try {
        const response = await axiosInstance.get("/po/status/pending", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: page },
        });
        setPendingData(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchSending();
  }, [refresh, refresh1, page]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {pendingData?.data?.map((data, index) => (
          <PendingCard
            key={index}
            data={data}
            refresh={() => setRefresh1((prev) => !prev)}
          />
        ))}
      </div>

      <CustomPagination
        current={page}
        total={pendingData?.totalPages}
        onChange={(x) => setPage(x)}
      />
    </>
  );
}
export default PendingList;
