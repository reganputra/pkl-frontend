import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import DoneCard from "./DoneCard";
import Cookies from "js-cookie";
import CustomPagination from "../../Elements/Pagination";

function DoneList() {
  const [doneData, setDoneData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDone = async () => {
      try {
        const response = await axiosInstance.get("/po/status/delivered", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: page },
        });
        setDoneData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDone();
  }, [page]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {doneData?.data?.map((data, index) => (
          <DoneCard key={index} data={data} />
        ))}
      </div>

      <CustomPagination
        current={page}
        total={doneData?.totalPages}
        onChange={(x) => setPage(x)}
      />
    </>
  );
}
export default DoneList;
