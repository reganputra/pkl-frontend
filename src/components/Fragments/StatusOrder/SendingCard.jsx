import StatusProductDetail from "../../Elements/StatusProductDetail";

function SendingCard({ handleClick, data }) {
  return (
    <>
      <StatusProductDetail data={data}>
        <p
          className="text-[21px]/9 font-bold text-[#BC303E]"
          onClick={() => handleClick()}
        >
          Cek No PO Surat Jalan
        </p>
      </StatusProductDetail>
    </>
  );
}
export default SendingCard;
