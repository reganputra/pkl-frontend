import { useEffect, useState } from "react";
import SendingCard from "./SendingCard";
import AddSuratJalan from "./AddSuratJalan";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";

function SendingList() {
  const [showAddSuratJalan, setShowAddSuratJalan] = useState(false);
  const [sendingData, setSendingData] = useState(null);

  useEffect(() => {
    const fetchSending = async () => {
      try {
        const response = await axiosInstance.get("/po/status/sending", {
          headers: { Authorization: Cookies.get("token") },
        });
        setSendingData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSending();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {sendingData?.map((data, index) => (
          <SendingCard
            key={index}
            data={data}
            handleClick={() => setShowAddSuratJalan(false)}
          />
        ))}
      </div>
      {showAddSuratJalan && (
        <AddSuratJalan closeAddSuratJalan={() => setShowAddSuratJalan(false)} />
      )}
    </>
  );
}
export default SendingList;
