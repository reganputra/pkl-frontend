import StatusProdukDetail from "../../Elements/StatusProdukDetail";

function KartuKirim({ handleKlik, data }) {
  return (
    <>
      <StatusProdukDetail data={data}>
        <p
          className="text-[21px]/9 font-bold text-[#BC303E]"
          onClick={() => handleKlik()}
        >
          Cek No PO Surat Jalan
        </p>
      </StatusProdukDetail>
    </>
  );
}
export default KartuKirim;
