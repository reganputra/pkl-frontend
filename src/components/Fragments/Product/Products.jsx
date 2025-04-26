import { useState } from "react";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";

function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center w-screen gap-8 py-28 flex-col bg-white text-[#BC303E]">
        <h1 className="font-bold text-5xl">Manajemen Produk</h1>
        <button
          className="bg-[#BC303E] text-white rounded-xl px-17 py-2 font-bold mb-9 text-[23px]"
          onClick={() => setShowAddProduct(true)}
        >
          Tambahkan Produk
        </button>
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
      </div>
      {showAddProduct && (
        <AddProduct closeAddProduct={() => setShowAddProduct(false)} />
      )}
    </>
  );
}
export default Products;
