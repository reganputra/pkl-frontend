function DeleteConfirm({ closeDeleteConfirm, confirm, cancel }) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeDeleteConfirm()}
      ></div>

      <div className="z-30 w-100 rounded-lg border bg-white px-5 py-10">
        <p className="text-center text-2xl font-bold text-black">
          Apakah kamu yakin mau menghapus produk ini?
        </p>
        <div className="mt-10 flex w-full justify-around">
          <button
            onClick={() => cancel()}
            className="w-20 rounded-lg border-2 bg-white px-5 py-2 font-bold"
          >
            Tidak
          </button>
          <button
            onClick={() => confirm()}
            className="w-20 rounded-lg bg-[#BC303E] px-5 py-2 font-bold text-white"
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
