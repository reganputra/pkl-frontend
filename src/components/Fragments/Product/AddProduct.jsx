import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddProduct({ closeAddProduct }) {
  return (
    <div
      className="bg-black/40 flex justify-center items-center w-screen h-screen fixed top-0"
      onClick={() => closeAddProduct()}
    >
      <form
        action=""
        method="post"
        className="flex flex-col bg-white justify-center items-center text-black border gap-3 w-fit p-8 rounded"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex self-end !h-6 cursor-pointer"
          onClick={() => closeAddProduct()}
        />
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="NamaProduk">
                Nama Produk
              </label>
              <input
                type="text"
                name="NamaProduk"
                id="NamaProduk"
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="KodeBarang">
                Kode Barang
              </label>
              <input
                type="text"
                name="KodeBarang"
                id="KodeBarang"
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="Kuantitas">
                Kuantitas
              </label>
              <input
                type="text"
                name="Kuantitas"
                id="Kuantitas"
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#BC303E] font-bold" htmlFor="Kategori">
                Kategori
              </label>
              <input
                type="text"
                name="Kategori"
                id="Kategori"
                className="border-2 rounded-lg w-96 h-10 px-2 border-black"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[#BC303E] font-bold" htmlFor="Ukuran">
            Ukuran
          </label>
          <input
            type="text"
            name="Ukuran"
            id="Ukuran"
            className="border-2 rounded-lg w-96 h-10 px-2 border-black"
          />
        </div>

        <input
          type="submit"
          value="Tambahan"
          className="bg-[#BC303E] text-white rounded px-12 py-2 font-bold mt-4"
        />
      </form>
    </div>
  );
}
export default AddProduct;
