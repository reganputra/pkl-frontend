function Header() {
  return (
    <>
      <div className="flex justify-between w-screen py-3 px-7 h-18 bg-[#FFCF45] absolute top-0 rounded-b-3xl">
        <img
          src="/assets/images/LogoPerusahaan.png"
          alt="logo perusahaan"
          className="w-30 absolute"
        />
        <div className="flex justify-evenly items-center grow-3 text-black font-bold">
          <p>Beranda</p>
          <p>Riwayat</p>
        </div>
      </div>
    </>
  );
}
export default Header;
