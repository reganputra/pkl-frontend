import Header from "../components/Header";
import Products from "../components/Products";

function Homepage() {
  return (
    <>
      <Header />
      <img src="assets/images/logan.jpg" alt="" className="w-screen" />
      <Products />
    </>
  );
}
export default Homepage;
