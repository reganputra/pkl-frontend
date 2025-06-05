import StatusProdukDetail from "../../Elements/StatusProdukDetail";

function KartuSelesai({ data }) {
  return (
    <>
      <StatusProdukDetail data={data}>
        <p className="text-[21px]/9 font-bold text-[#BC303E]">Terkirim</p>
      </StatusProdukDetail>
    </>
  );
}
export default KartuSelesai;
