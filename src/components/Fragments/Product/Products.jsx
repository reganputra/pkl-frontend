import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import axiosInstance from "../../../api/axiosinstance";
import Cookies from "js-cookie";
import CustomPagination from "../../Elements/Pagination";

function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(null);
  const [updateStock, setUpdateStock] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/items", {
          headers: { Authorization: Cookies.get("token") },
          params: { page: page },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchProducts();
  }, [updateStock]);

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
        {products?.data?.map((product) => (
          <ProductDetail
            data={product}
            key={product._id}
            onUpdateStock={() => setUpdateStock(!updateStock)}
          />
        ))}
      </div>

      <CustomPagination
        current={page}
        total={products?.totalPages}
        onChange={(x) => setPage(x)}
      />

      {showAddProduct && (
        <AddProduct closeAddProduct={() => setShowAddProduct(false)} />
      )}
    </>
  );
}
export default Products;
