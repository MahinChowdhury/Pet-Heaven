import GoogleIcon from "../../assets/icons/icons8-google.svg";
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";

const Register = () => {
  return (
    <>
      <header className="bg-amber-100 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-start border-gray-500">
        <div className="ml-5 logo h-16 w-16 pt-2">
          <img src="src\assets\logo.png" alt="logo" />
        </div>

        <h1 className="ml-3 font-sans text-2xl font-bold text-red-900">
          Pet Heaven
        </h1>
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

              <form action="">
                <div className="mt-6">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Username"
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
                  />
                </div>

                <div className="mt-6">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Address"
                  />
                </div>

                <div className="mt-6">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contact Number"
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
                  />
                </div>

                <div className="mt-6">
                  <input
                    id="conf_password"
                    name="conf_password"
                    type="password"
                    required
                    className="block bg-gray-300 w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Confirm Password"
                  />
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
                  <a className="text-lg" href="">
                    Already have an account?{" "}
                    <a href="" className="font-semibold">
                      Login
                    </a>
                  </a>
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
