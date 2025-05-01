import Footer from "../components/Elements/Footer";
import Header from "../components/Elements/Header";
import StatusProduct from "../components/Fragments/StatusOrder/StatusProduct";

function StatusOrderPage() {
  return (
    <>
      <Header active={2} />
      <StatusProduct />
      <Footer />
    </>
  );
}
export default StatusOrderPage;
