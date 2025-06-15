import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";
import KartuKirim from "./KartuKirim";
import HalamanKustom from "../../Elements/Halaman";
import TambahSuratJalan from "./TambahSuratJalan";

function ListKirim() {
  const [tunjukTambahSuratJalan, setTunjukTambahSuratJalan] = useState(false);
  const [dataKirim, setDataKirim] = useState(null);
  const [halaman, setHalaman] = useState(1);

  useEffect(() => {
    const fetchSending = async () => {
      try {
        const response = await axiosInstance.get("/po/status/sending", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: halaman },
        });
        setDataKirim(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSending();
  }, [halaman]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        {dataKirim?.data?.map((data, index) => (
          <KartuKirim
            key={index}
            data={data}
            handleKlik={() => setTunjukTambahSuratJalan(true)}
          />
        ))}
      </div>

      <HalamanKustom
        sekarang={halaman}
        total={dataKirim?.totalPages}
        ubah={(x) => setHalaman(x)}
      />

      {tunjukTambahSuratJalan && (
        <TambahSuratJalan
          closeTambahSuratJalan={() => setTunjukTambahSuratJalan(false)}
        />
      )}
    </>
  );
}
export default ListKirim;
