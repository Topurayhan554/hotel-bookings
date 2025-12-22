import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, signInFunc, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase letter, 1 lowercase letter, and be 6+ characters long."
      );
      return;
    }

    signInFunc(email, password)
      .then((res) => {
        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified");
          return;
        }

        setUser(res.user);
        navigate(location.state || "/");
        toast.success("SignIn successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(location.state || "/");
        toast.success("SignIn successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-24">
      <form
        onSubmit={handleLogin}
        className="md:w-96 w-80 flex flex-col items-center justify-center
        bg-emerald-50/90 backdrop-blur-md rounded-2xl px-6 py-8 shadow-lg"
      >
        <h2 className="text-4xl text-emerald-900 font-medium">Login</h2>
        <p className="text-sm text-emerald-700/80 mt-3 text-center">
          Welcome back! Please login in to continue
        </p>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full mt-8 bg-emerald-100/60 flex items-center justify-center h-12 rounded-full hover:bg-emerald-200/70 transition"
        >
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
            alt="googleLogo"
          />
        </button>

        <div className="flex items-center gap-4 w-full my-5">
          <div className="w-full h-px bg-emerald-300/60"></div>
          <p className="w-full text-nowrap text-sm text-emerald-700/80 text-center">
            or sign in with email
          </p>
          <div className="w-full h-px bg-emerald-300/60"></div>
        </div>

        <div className="flex items-center w-full border border-emerald-300/60 h-12 rounded-full pl-6 gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="bg-transparent text-emerald-800 placeholder-emerald-600 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="flex items-center mt-6 w-full border border-emerald-300/60 h-12 rounded-full pl-6 gap-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent text-emerald-800 placeholder-emerald-600 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="w-full flex items-center justify-between mt-8 text-emerald-700/80">
          <div className="flex items-center gap-2">
            <input className="h-5" type="checkbox" id="checkbox" />
            <label className="text-sm" htmlFor="checkbox">
              Remember me
            </label>
          </div>
          <a className="text-sm underline hover:text-emerald-900" href="#">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-8 w-full h-11 rounded-full text-white
          bg-emerald-600 hover:bg-emerald-700 transition"
        >
          Login
        </button>

        <p className="text-emerald-700/80 text-sm mt-4">
          Don’t have an account?{" "}
          <Link to={"/register"} className="text-emerald-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
