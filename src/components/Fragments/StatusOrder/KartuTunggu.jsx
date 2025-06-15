import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import StatusProdukDetail from "../../Elements/StatusProdukDetail";

function KartuTunggu({ data, ulang }) {
  const handleKlik = async () => {
    try {
      const response = await axiosInstance.put(
        `/po/update-status/sending/${data?.nomorPO}`,
        {},
        {
          headers: { Authorization: Cookies.get("token") },
        },
      );
      ulang();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusProdukDetail data={data}>
        <p className="text-[21px]/9 font-bold text-[#BC303E]">
          Menunggu Konfirmasi
        </p>
        <button
          onClick={() => handleKlik()}
          className="rounded-lg bg-[#BC303E] px-5 py-2 font-bold text-white"
        >
          Kirim
        </button>
      </StatusProdukDetail>
    </>
  );
}
export default KartuTunggu;
