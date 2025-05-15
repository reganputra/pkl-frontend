import Login from "../components/Fragments/Login/FormLogin";

function LoginPage() {
  return (
    <>
      <div className="flex w-screen items-center justify-end">
        <img
          src="/assets/images/bgLogin.png"
          alt=""
          className="hidden h-screen flex-2 md:block"
        />
        <div className="relative flex h-screen flex-1 items-center justify-center">
          <img
            src="/assets/images/bgForm.png"
            alt=""
            className="absolute top-0 left-0 h-screen w-full"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
export default LoginPage;
