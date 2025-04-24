function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-screen py-3 px-10 h-18 bg-[#FFCF45] absolute top-0 rounded-b-3xl">
        <img
          src="/assets/images/LogoPerusahaan.png"
          alt="logo perusahaan"
          className="w-30"
        />
        <div className="flex justify-evenly items-center w-full text-black font-bold">
          <p>Produk</p>
          <p>Status Orderan</p>
          <p>Riwayat</p>
        </div>
        <button className="bg-white border-2 border-[#BC303E] text-[#BC303E] rounded px-4 py-1 h-max cursor-pointer">
          Logout
        </button>
      </div>
    </>
  );
}
export default Header;
