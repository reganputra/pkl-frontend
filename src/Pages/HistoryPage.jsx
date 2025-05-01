import Footer from "../components/Elements/Footer";
import Header from "../components/Elements/Header";
import Banner from "../components/Fragments/Riwayat/Banner";
import Filter from "../components/Fragments/Riwayat/Filter";

function HistoryPage() {
  return (
    <>
      <Header active={3} />
      <Banner />
      <Filter />
      <Footer />
    </>
  );
}
export default HistoryPage;
