import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confPasswordError, setConfPasswordError] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [role, SetRole] = useState("user");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    } else if (name === "conf_password") {
      setConfPassword(value);
      setConfPasswordError("");
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "contactNum") {
      setContactNum(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "role") {
      SetRole(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError(""); // Clear the error when the input is valid
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError(""); // Clear the error when the input is valid
    }

    if (confPassword.trim() === "") {
      setConfPasswordError("Confirm Password is required");
      isValid = false;
    } else if (confPassword !== password) {
      setConfPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfPasswordError(""); // Clear the error when the input is valid
    }

    if (isValid) {
      // Perform your registration logic
      console.log("Registration successful");

      axios
        .post("http://localhost:3001/register", {
          username,
          email,
          password,
          contactNum,
          address,
          role,
        })
        .then((res) => {
          console.log("Registration successful:", res.data);
          if (role === "user") navigate("/");
          else navigate("/admin/dashboard");
        })
        .catch((err) => {
          console.log("Registration failed:", err);
        });
    }
  };

  return (
    <>
      <header className="bg-amber-100 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-start border-gray-500">
        <div className="ml-5 logo h-16 w-16 pt-2">
          <img src="src\assets\logo.png" alt="logo" />
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
                src="src\assets\register.png"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-4/12">
              <h1 className="font-semibold text-3xl text-center mb-4">
                Register
              </h1>

              <form action="" onSubmit={handleSubmit}>
                <div className="mt-6">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Username"
                    onChange={handleInput}
                  />
                </div>
                <div className="mt-6">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    onChange={handleInput}
                  />
                </div>
                {emailError && (
                  <span className="text-red-600">{emailError}</span>
                )}
                <div className="mt-6">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Address"
                    onChange={handleInput}
                  />
                </div>

                <div className="mt-6">
                  <input
                    id="contactNum"
                    name="contactNum"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contact Number"
                    onChange={handleInput}
                  />
                </div>

                <div className="mt-6">
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
                </div>

                <div className="mt-6">
                  <input
                    id="conf_password"
                    name="conf_password"
                    type="password"
                    required
                    className="block bg-gray-300 w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                  />
                  {confPasswordError && (
                    <span className="text-red-600">{confPasswordError}</span>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-3xl bg-red-300 px-3 py-2 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="mt-8 text-center">
                  <Link className="text-lg" to="/login">
                    Already have an account?{" "}
                    <span className="font-semibold">Login</span>
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

export default Register;
