import StatusProductDetail from "../../Elements/StatusProductDetail";

function DoneCard({ data }) {
  return (
    <>
      <StatusProductDetail data={data}>
        <p className="text-[21px]/9 font-bold text-[#BC303E]">Terkirim</p>
      </StatusProductDetail>
    </>
  );
}
export default DoneCard;
