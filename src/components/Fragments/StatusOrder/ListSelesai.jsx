import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import KartuSelesai from "./KartuSelesai";
import HalamanKustom from "../../Elements/Halaman";

function ListSelesai() {
  const [dataSelesai, setDataSelesai] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSelesai = async () => {
      try {
        const response = await axiosInstance.get("/po/status/delivered", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: page },
        });
        setDataSelesai(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSelesai();
  }, [page]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {dataSelesai?.data?.map((data, index) => (
          <KartuSelesai key={index} data={data} />
        ))}
      </div>

      <HalamanKustom
        sekarang={page}
        total={dataSelesai?.totalPages}
        ubah={(x) => setPage(x)}
      />
    </>
  );
}
export default ListSelesai;
