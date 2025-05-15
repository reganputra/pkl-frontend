import { useEffect, useState } from "react";
import SendingCard from "./SendingCard";
import AddSuratJalan from "./AddSuratJalan";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";
import CustomPagination from "../../Elements/Pagination";

function SendingList() {
  const [showAddSuratJalan, setShowAddSuratJalan] = useState(false);
  const [sendingData, setSendingData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSending = async () => {
      try {
        const response = await axiosInstance.get("/po/status/sending", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: page },
        });
        setSendingData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSending();
  }, [page]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {sendingData?.data?.map((data, index) => (
          <SendingCard
            key={index}
            data={data}
            handleClick={() => setShowAddSuratJalan(true)}
          />
        ))}
      </div>

      <CustomPagination
        current={page}
        total={sendingData?.totalPages}
        onChange={(x) => setPage(x)}
      />

      {showAddSuratJalan && (
        <AddSuratJalan closeAddSuratJalan={() => setShowAddSuratJalan(false)} />
      )}
    </>
  );
}
export default SendingList;
