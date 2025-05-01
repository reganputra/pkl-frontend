import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import axiosInstance from "../../../api/axiosinstance";

function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/items", {});
        setProducts(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-screen gap-8 py-28 flex-col bg-white text-[#BC303E]">
        <h1 className="font-bold text-5xl">Manajemen Produk</h1>
        <button
          className="bg-[#BC303E] text-white rounded-xl px-12 py-2 font-bold mb-9 text-[20px]"
          onClick={() => setShowAddProduct(true)}
        >
          Tambahkan Produk
        </button>
        {products?.map((product) => (
          <ProductDetail data={product} key={product._id} />
        ))}
      </div>
      {showAddProduct && (
        <AddProduct closeAddProduct={() => setShowAddProduct(false)} />
      )}
    </>
  );
}
export default Products;
