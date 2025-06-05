import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosinstance";

function Masuk() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleMasuk = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });

      Cookies.set("token", `Bearer ${response.data.token}`, { expires: 7 });
      navigate("/rumah");
    } catch (error) {
      alert(error.response?.data.message);
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      <form
        method="post"
        onSubmit={handleMasuk}
        className="z-1 flex h-fit flex-col items-center justify-center gap-3 rounded-lg bg-white p-6 text-black"
      >
        <h2 className="text-2xl font-bold">Masuk Akun</h2>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id=""
            className="h-10 w-64 rounded-lg border-2 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            id=""
            className="h-10 w-64 rounded-lg border-2 px-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-[#FFCF45] py-2 text-center"
        >
          Masuk
        </button>

        <p>
          Saya belum punya akun!{" "}
          <Link to="/daftar">
            <span className="font-bold">Daftar</span>
          </Link>
        </p>
      </form>
    </>
  );
}
export default Masuk;
