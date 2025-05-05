import StatusProductDetail from "../../Elements/StatusProductDetail";

function PendingCard({ data }) {
  return (
    <>
      <StatusProductDetail data={data}>
        <p className="font-bold text-[#BC303E] text-[21px]/9">
          Menunggu Konfirmasi
        </p>
        <button className="bg-[#BC303E] text-white px-5 py-2 rounded-lg font-bold">
          Kirim
        </button>
      </StatusProductDetail>
    </>
  );
}
export default PendingCard;
