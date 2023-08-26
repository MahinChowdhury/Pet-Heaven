import GoogleIcon from "../../assets/icons/icons8-google.svg";
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";

const Login = () => {
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
                src="src\assets\login.jpg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-4/12">
              <h1 className="font-semibold text-3xl text-center mb-4">Login</h1>

              <form action="">
                <div className="mt-8">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block bg-gray-300 w-full rounded-lg border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring- placeholder:text-lg focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-8">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block bg-gray-300 w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
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
                <a className="underline text-lg" href="">
                  Forget Password?
                </a>
              </div>
              <div className="mt-8">
                <h1 className="flex flex-row">
                  <span className="flex-1 border-b-2 border-black mr-6"></span>
                  <p className="text-lg">or Log in With</p>
                  <span className="flex-1 border-b-2 border-black ml-6"></span>
                </h1>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center">
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
              </div>

              <div className="mt-8">
                <div className="mt-8 text-center">
                  <a className="text-lg" href="">
                    Don't have an account?{" "}
                    <a href="" className="font-semibold">
                      Register
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

export default Login;
