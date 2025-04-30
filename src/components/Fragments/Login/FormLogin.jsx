import { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../../api/axiosinstance";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });

      Cookies.set("token", response.data.token, { expires: 7 });
      navigate("/home");
    } catch (error) {
      alert(error.response?.data.message);
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      <form
        method="post"
        onSubmit={handleLogin}
        className="bg-white rounded-lg text-black p-6 flex flex-col h-fit justify-center items-center gap-3 z-1"
      >
        <h2 className="text-2xl font-bold">Login Akun</h2>

        <div className="flex-col flex">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id=""
            className="border-2 rounded-lg w-64 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            id=""
            className="border-2 rounded-lg w-64 h-10 px-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#FFCF45] rounded-md py-2 w-full text-center mt-4"
        >
          Login
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
export default Login;
