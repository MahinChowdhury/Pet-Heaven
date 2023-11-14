import GoogleIcon from "../../assets/icons/icons8-google.svg";
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isEmailValid = true;
    let isPasswordValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      isEmailValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isEmailValid = false;
    } else {
      setEmailError(""); // Clear the error when the input is valid
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isPasswordValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isPasswordValid = false;
    } else {
      setPasswordError(""); // Clear the error when the input is valid
    }

    if (isEmailValid && isPasswordValid) {
      // Perform your login logic
      console.log("Login successful");

      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("Login successful:", res.data);
          console.log("Login successful:", res.data[0].role);
          if (res.data[0].role === "user") {
            navigate("/allpets");
            Cookies.set("username", res.data[0].name);
          } else {
            navigate("/admin/dashboard");
            Cookies.set("adminname", res.data[0].name);
          }
        })
        .catch((err) => {
          console.log("Login failed:", err);
          setLoginFailed(true);
        });
    }
  };

  return (
    <>
      <header className="bg-amber-100 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-start border-gray-500">
        <div className="ml-5 logo h-16 w-16 pt-2">
          <img src={logo} alt="logo" />
        </div>

        <Link className="ml-3 font-sans text-2xl font-bold text-red-900" to="/">
          Pet Heaven
        </Link>
      </header>
      <div className="h-screen">
        <div className="container h-full px-6">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-7/12">
              <img
                src="src\assets\login.jpg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-4/12">
              <h1 className="font-semibold text-3xl text-center mb-4">Login</h1>

              <form action="" onSubmit={handleSubmit}>
                <div className="mt-8">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    onChange={handleInput}
                  />
                  {emailError && (
                    <span className="text-red-600">{emailError}</span>
                  )}
                </div>
                <div className="mt-8">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block bg-gray-300 w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                    onChange={handleInput}
                  />
                  {passwordError && (
                    <span className="text-red-600">{passwordError}</span>
                  )}
                  {loginFailed && (
                    <div
                      className="mt-4 flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                      role="alert"
                    >
                      <svg
                        className="flex-shrink-0 inline w-4 h-4 mr-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <div>
                        <span className="font-medium">
                          Invalid credentials!
                        </span>
                        <br></br>
                        Check your email or password and try again.
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-3xl bg-red-300 px-3 py-2 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <Link className="underline text-lg" to="/forgot-password">
                  Forget Password?
                </Link>
              </div>

              {/* This section is for login using google and facebook which will be implemented later  */}

              {/* <div className="mt-8">
                <h1 className="flex flex-row">
                  <span className="flex-1 border-b-2 border-black mr-6"></span>
                  <p className="text-lg">or Log in With</p>
                  <span className="flex-1 border-b-2 border-black ml-6"></span>
                </h1>
              </div> */}

              {/* <div className="mt-8 flex flex-wrap items-center justify-center">
                <button className="w-2/5 flex flex-wrap bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full mr-4">
                  <img
                    src={FacebookIcon}
                    alt="Facebook Icon"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </button>
                <button className="w-2/5 border flex flex-wrap border-gray-500 hover:bg-gray-100 text-gray-500 font-bold py-2 px-4 rounded-full ml-4">
                  <img
                    src={GoogleIcon}
                    alt="Google Icon"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </button>
              </div> */}

              <div className="mt-8">
                <div className="mt-8 text-center">
                  <Link className="text-lg" to="/register">
                    Don't have an account?{" "}
                    <span className="font-semibold">Register</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
