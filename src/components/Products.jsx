import ProductDetail from "./ProductDetail";

function Products() {
  return (
    <>
      <div className="flex justify-center items-center w-screen gap-8 py-28 flex-col bg-[#D3D3D3]">
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
      </div>
    </>
  );
}
export default Products;
