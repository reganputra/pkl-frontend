import StatusProductDetail from "../../Elements/StatusProductDetail";

function SendingCard({ handleClick, data }) {
  return (
    <>
      <StatusProductDetail data={data}>
        <p
          className="font-bold text-[#BC303E] text-[21px]/9"
          onClick={() => handleClick()}
        >
          Cek No PO Surat Jalan
        </p>
      </StatusProductDetail>
    </>
  );
}
export default SendingCard;
