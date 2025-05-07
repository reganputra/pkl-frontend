import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import DoneCard from "./DoneCard";
import Cookies from "js-cookie";

function DoneList({ data }) {
  const [doneData, setDoneData] = useState(null);

  useEffect(() => {
    const fetchDone = async () => {
      try {
        const response = await axiosInstance.get("/po/status/delivered", {
          headers: { Authorization: Cookies.get("token") },
        });
        setDoneData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDone();
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      {doneData?.data?.map((data, index) => (
        <DoneCard key={index} data={data} />
      ))}
    </div>
  );
}
export default DoneList;
