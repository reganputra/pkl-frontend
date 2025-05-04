function DeleteConfirm({ closeDeleteConfirm, confirm, cancel }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-20">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeDeleteConfirm()}
      ></div>

      <div className="bg-white border rounded-lg py-10 px-5 z-30 w-100">
        <p className="text-black font-bold text-2xl text-center">
          Apakah kamu yakin mau menghapus produk ini?
        </p>
        <div className="w-full flex justify-around mt-10">
          <button
            onClick={() => cancel()}
            className="w-20 bg-white border-2 font-bold py-2 px-5 rounded-lg"
          >
            Tidak
          </button>
          <button
            onClick={() => confirm()}
            className="w-20 bg-[#BC303E] text-white font-bold py-2 px-5 rounded-lg"
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
