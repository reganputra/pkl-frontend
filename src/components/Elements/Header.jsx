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
      <div className="flex z-10 justify-between items-center w-screen py-3 px-10 h-18 bg-[#FFCF45] absolute top-0 rounded-b-3xl">
        <img
          src="/assets/images/LogoPerusahaan.png"
          alt="logo perusahaan"
          className="w-30"
        />
        <div className="flex justify-evenly items-center w-full text-black font-bold">
          <Link to="/home" className={active == 1 ? "text-[#BC303E]" : ""}>
            Produk
          </Link>
          <Link to="/status" className={active == 2 ? "text-[#BC303E]" : ""}>
            Status Orderan
          </Link>
          <Link to="/riwayat" className={active == 3 ? "text-[#BC303E]" : ""}>
            Riwayat
          </Link>
        </div>
        <button
          onClick={() => handleLogout()}
          className="bg-white border-2 border-[#BC303E] text-[#BC303E] rounded px-4 py-1 h-max cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default Header;
