import Tajuk from "../components/Elements/Tajuk";
import CatatanKaki from "../components/Elements/CatatanKaki";
import StatusProduk from "../components/Fragments/StatusOrder/StatusProduk";

function HalamanStatusPesanan() {
  return (
    <>
      <Tajuk active={2} />
      <StatusProduk />
      <CatatanKaki />
    </>
  );
}
export default HalamanStatusPesanan;
