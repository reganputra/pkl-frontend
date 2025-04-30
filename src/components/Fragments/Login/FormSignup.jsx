import { useState } from "react";
import axiosInstance from "../../../api/axiosinstance";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", {
        username,
        email,
        password,
      });

      alert("Akun telah dibuat, silahkan melakukan login");
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
        className="bg-white rounded-lg text-black p-6 flex flex-col h-fit justify-center items-center gap-3 z-1"
      >
        <h2 className="text-2xl font-bold">Daftar Akun</h2>

        <div className="flex-col flex">
          <label htmlFor="nama">Username</label>
          <input
            type="text"
            name="nama"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            id=""
            className="border-2 rounded-lg w-64 h-10 px-2"
          />
        </div>

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
