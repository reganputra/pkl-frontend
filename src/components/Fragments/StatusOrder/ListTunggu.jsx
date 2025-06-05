import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import KartuTunggu from "./KartuTunggu";
import HalamanKustom from "../../Elements/Halaman";

function ListTunggu({ ulang }) {
  const [tungguData, setTungguData] = useState(null);
  const [halaman, setHalaman] = useState(1);
  const [ulang1, setUlang1] = useState(false);

  useEffect(() => {
    const fetchKirim = async () => {
      try {
        const response = await axiosInstance.get("/po/status/pending", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: halaman },
        });
        setTungguData(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchKirim();
  }, [ulang, ulang1, halaman]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {tungguData?.data?.map((data, index) => (
          <KartuTunggu
            key={index}
            data={data}
            ulang={() => setUlang1((prev) => !prev)}
          />
        ))}
      </div>

      <HalamanKustom
        sekarang={halaman}
        total={tungguData?.totalPages}
        ubah={(x) => setHalaman(x)}
      />
    </>
  );
}
export default ListTunggu;
