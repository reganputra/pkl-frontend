import Login from "../components/Fragments/Login/FormLogin";

function LoginPage() {
  return (
    <>
      <div className="flex justify-end items-center w-screen">
        <img
          src="/assets/images/bgLogin.png"
          alt=""
          className="h-screen flex-2"
        />
        <div className="flex justify-center items-center flex-1 relative h-screen">
          <img
            src="/assets/images/bgForm.png"
            alt=""
            className="h-screen w-full top-0 left-0 absolute"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
export default LoginPage;
