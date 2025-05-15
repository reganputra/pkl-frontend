import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", {
        username,
        email,
        password,
      });

      alert("Akun telah dibuat, silahkan melakukan login");
      navigate("/");
    } catch (error) {
      alert(error.response?.data.message);
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleSignUp}
        className="z-1 flex h-fit max-w-4/5 flex-col items-center justify-center gap-3 rounded-lg bg-white p-6 text-black"
      >
        <h2 className="text-2xl font-bold">Daftar Akun</h2>

        <div className="flex flex-col">
          <label htmlFor="nama">Username</label>
          <input
            type="text"
            name="nama"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            id=""
            className="h-10 w-64 rounded-lg border-2 px-2"
          />
        </div>

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
          <label htmlFor="password">Password</label>
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
          Sign Up
        </button>

        <p>
          Saya sudah punya akun!{" "}
          <Link to="/">
            <span className="font-bold">Masuk</span>
          </Link>
        </p>
      </form>
    </>
  );
}
export default Signup;
