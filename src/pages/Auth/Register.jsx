import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const {
    createUserFunc,
    updateProfileFunc,
    emailVerificationFunc,
    logOutFunc,
    signInGoogle,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase letter, 1 lowercase letter, and be 6+ characters long."
      );
      return;
    }

    // Firebase create user
    createUserFunc(email, password)
      .then((userCredential) => {
        // Update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            // Send email verification
            emailVerificationFunc()
              .then(() => {
                // Log out after verification
                logOutFunc()
                  .then(() => {
                    toast.success(
                      "Signup successful. Check your email to validate your account."
                    );
                    navigate("/login");
                  })
                  .catch((err) => toast.error(err.message));
              })
              .catch((err) => toast.error(err.message));
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
            toast.error("An account with this email already exists.");
            break;
          case "auth/weak-password":
            toast.error("Password should be at least 6 characters long.");
            break;
          case "auth/invalid-email":
            toast.error("Invalid email format. Please check and try again.");
            break;
          default:
            toast.error(err.message || "An unexpected error occurred.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("SignIn successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleShowButton = () => {
    setShow(!show);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-24">
      <form
        onSubmit={handleRegister}
        className="md:w-96 w-80 flex flex-col items-center justify-center
        bg-emerald-50/90 backdrop-blur-md rounded-2xl px-6 py-8 shadow-lg"
      >
        <h2 className="text-4xl text-emerald-900 font-medium">Register</h2>
        <p className="text-sm text-emerald-700/80 mt-3 text-center">
          Welcome! Please register to continue
        </p>

        {/* Google sign-in */}
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
            or register with email
          </p>
          <div className="w-full h-px bg-emerald-300/60"></div>
        </div>

        {/* Name */}
        <label className="self-start text-sm text-emerald-700/80 mt-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="input w-full border text-gray-700 border-emerald-300/60 rounded-full h-12 px-4 mt-1 placeholder-gray-500/80 outline-none"
          placeholder="Your name"
          required
        />

        {/* Email */}
        <label className="self-start text-sm text-emerald-700/80 mt-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="input w-full border border-emerald-300/60 rounded-full h-12 px-4 mt-1 text-gray-700 placeholder-gray-500/80 outline-none"
          placeholder="Email"
          required
        />

        {/* Photo URL */}
        <label className="self-start text-sm text-emerald-700/80 mt-4">
          Photo URL
        </label>
        <input
          type="text"
          name="photo"
          className="input w-full border border-emerald-300/60 rounded-full h-12 px-4 mt-1 text-gray-700 placeholder-gray-500/80 outline-none"
          placeholder="Photo URL"
          required
        />

        {/* Password */}
        <div className="relative w-full">
          <label className="self-start text-sm text-emerald-700/80 mt-4">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            className="input w-full border border-emerald-300/60 rounded-full h-12 px-4 mt-1 text-gray-700 placeholder-gray-500/80 outline-none"
            placeholder="Type your password"
            required
          />

          <button
            onClick={handleShowButton}
            type="button"
            className="absolute top-13 right-6 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* Remember me + Forgot */}
        <div className="w-full flex items-center justify-between mt-6 text-emerald-700/80">
          <div className="flex items-center gap-2">
            <input className="h-5" type="checkbox" id="checkbox" />
            <label className="text-sm" htmlFor="checkbox">
              Remember me
            </label>
          </div>
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="mt-8 w-full h-11 rounded-full text-white
          bg-emerald-600 hover:bg-emerald-700 transition"
        >
          Register
        </button>

        <p className="text-emerald-700/80 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
