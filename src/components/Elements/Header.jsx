import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ active }) {
  const navigate = useNavigate();
  function handleLogout() {
    Cookies.remove("token");
    navigate("/");
  }
  return (
    <>
      <div className="fixed bottom-0 z-10 flex h-20 w-screen items-center justify-between rounded-t-3xl border-t-2 bg-[#FFCF45] px-3 py-3 md:top-0 md:h-18 md:rounded-b-3xl md:border-none md:px-10">
        <img
          src="/assets/images/LogoPerusahaan.png"
          alt="logo perusahaan"
          className="hidden w-30 md:block"
        />
        <div className="flex w-full items-center justify-evenly font-bold text-black">
          <Link to="/home" className={active == 1 ? "text-[#BC303E]" : ""}>
            Produk
          </Link>
          <Link to="/status" className={active == 2 ? "text-[#BC303E]" : ""}>
            Status Orderan
          </Link>
          <Link to="/riwayat" className={active == 3 ? "text-[#BC303E]" : ""}>
            Riwayat
          </Link>
          <button
            onClick={() => handleLogout()}
            className="block h-max cursor-pointer rounded border-2 border-[#BC303E] bg-white px-4 py-1 text-[#BC303E] md:hidden"
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => handleLogout()}
          className="hidden h-max cursor-pointer rounded border-2 border-[#BC303E] bg-white px-4 py-1 text-[#BC303E] md:block"
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default Header;
