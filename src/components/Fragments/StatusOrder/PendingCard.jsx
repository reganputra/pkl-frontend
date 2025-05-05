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
        }
      );
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusProductDetail data={data}>
        <p className="font-bold text-[#BC303E] text-[21px]/9">
          Menunggu Konfirmasi
        </p>
        <button
          onClick={() => handleClick()}
          className="bg-[#BC303E] text-white px-5 py-2 rounded-lg font-bold"
        >
          Kirim
        </button>
      </StatusProductDetail>
    </>
  );
}
export default PendingCard;
