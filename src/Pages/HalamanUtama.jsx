import Tajuk from "../components/Elements/Tajuk";
import Produk from "../components/Fragments/Product/Produk";
import CatatanKaki from "../components/Elements/CatatanKaki";

function HalamanUtama() {
  return (
    <>
      <Tajuk active={1} />
      <Produk />
      <CatatanKaki />
    </>
  );
}
export default HalamanUtama;
