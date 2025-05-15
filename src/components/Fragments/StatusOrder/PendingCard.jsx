import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import StatusProductDetail from "../../Elements/StatusProductDetail";

function PendingCard({ data, refresh }) {
  const handleClick = async () => {
    try {
      const response = await axiosInstance.put(
        `/po/update-status/sending/${data?.nomorPO}`,
        {},
        {
          headers: { Authorization: Cookies.get("token") },
        },
      );
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusProductDetail data={data}>
        <p className="text-[21px]/9 font-bold text-[#BC303E]">
          Menunggu Konfirmasi
        </p>
        <button
          onClick={() => handleClick()}
          className="rounded-lg bg-[#BC303E] px-5 py-2 font-bold text-white"
        >
          Kirim
        </button>
      </StatusProductDetail>
    </>
  );
}
export default PendingCard;
