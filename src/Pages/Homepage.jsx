import Footer from "../components/Elements/Footer";
import Header from "../components/Elements/Header";
import Products from "../components/Fragments/Product/Products";

function Homepage() {
  return (
    <>
      <Header active={1} />
      <Products />
      <Footer />
    </>
  );
}
export default Homepage;
