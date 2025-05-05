import StatusProductDetail from "../../Elements/StatusProductDetail";

function DoneCard({ data }) {
  return (
    <>
      <StatusProductDetail data={data}>
        <p className="font-bold text-[#BC303E] text-[21px]/9">Terkirim</p>
      </StatusProductDetail>
    </>
  );
}
export default DoneCard;
