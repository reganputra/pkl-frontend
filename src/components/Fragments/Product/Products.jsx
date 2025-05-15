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
      <div className="flex w-screen flex-col items-center justify-center gap-8 bg-white py-14 text-[#BC303E] md:py-28">
        <h1 className="text-center text-5xl font-bold md:text-left">
          Manajemen Produk
        </h1>
        <button
          className="mb-9 rounded-xl bg-[#BC303E] px-12 py-2 text-[20px] font-bold text-white"
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
        <AddProduct
          closeAddProduct={() => setShowAddProduct(false)}
          refresh={() => setUpdateStock(!updateStock)}
        />
      )}
    </>
  );
}
export default Products;
