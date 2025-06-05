import Tajuk from "../components/Elements/Tajuk";
import Saring from "../components/Fragments/Riwayat/Saring";
import Spanduk from "../components/Fragments/Riwayat/Spanduk";
import CatatanKaki from "../components/Elements/CatatanKaki";

function HalamanRiwayat() {
  return (
    <>
      <Tajuk active={3} />
      <Spanduk />
      <Saring />
      <CatatanKaki />
    </>
  );
}
export default HalamanRiwayat;
