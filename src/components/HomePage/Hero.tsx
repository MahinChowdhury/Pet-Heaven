const Hero = () => {
  return (
    <>
      {/* The Hero Section */}

      <div className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-red-900 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              We CARE...
            </h1>
            <h1 className="text-red-900 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Because you CARE
            </h1>
            <p className="mt-6 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Find Your New Best Friend
            </p>

            <div>
              <a
                href="#"
                className="ml-24 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Know About Process
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="src\assets\hero.jpg"
              alt="mockup"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Category Section */}

      <div className="bg-blue-500 m-10 rounded-3xl">
        <div className="flex flex-row items-center justify-between">
          <div className="ml-20 mr-16 mb-56 max-w-sm CatBig">
            <div className="flex flex-col">
              <img
                src="src\assets\CatBig.png"
                className="h-auto w-36 rounded-lg"
                alt="Cat"
              />
              {/* <p>Cat</p> */}
            </div>
          </div>

          <div className="ml-16 scale-150">
            <div className="flex flex-col">
              <img
                src="src\assets\blue_bird.png"
                className="h-auto w-32 rounded-lg"
                alt="Bird"
              />
              {/* <p>Bird</p> */}
            </div>
          </div>

          <div className="scale-125">
            <div className="flex flex-col">
              <img
                src="src\assets\rabbit.png"
                className="h-auto w-52 rounded-lg"
                alt="Bird"
              />
              {/* <p>Rabbit</p> */}
            </div>
          </div>
          <div className="max-w-sm scale-125">
            <div className="flex flex-col">
              <img
                src="src\assets\puppy.png"
                className="h-auto w-96 rounded-lg"
                alt="Bird"
              />
              {/* <p>Dog</p> */}
            </div>
          </div>

          <div className="max-w-sm scale-125 mr-12">
            <div className="flex flex-col">
              <img
                src="src\assets\otherCategories.jpg"
                className="h-auto w-40 rounded-full"
                alt="Bird"
              />
              <p className="ml-4 mt-2">Other Catogories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
