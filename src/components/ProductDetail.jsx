function ProductDetail() {
  return (
    <>
      <div className="flex rounded bg-white border w-3/4 h-32 text-black justify-around items-center">
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/kecap.jpg"
            alt=""
            className="w-28 object-contain shadow mr-4"
          />
          <div className="flex gap-6 flex-col">
            <p>Kecap Manis - Lombok Gandaria 1 Karton</p>
            <p>KMLG1</p>
          </div>
        </div>

        <div className="flex flex-col justify-centers items-end">
          <div className="flex flex-col items-center justify-center">
            <p>stock : 1234</p>
            <p>add or subtract</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src="" alt="trash" />
            <span className="bg-white border-2 border-red-500 text-red-500 rounded px-3 py-1">
              Edit Produk
            </span>
            <span className="bg-red-500 border-2 border-red-500 text-white rounded px-3 py-1">
              Update Stock
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
