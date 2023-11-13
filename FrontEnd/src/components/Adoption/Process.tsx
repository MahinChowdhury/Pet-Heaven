import Navbar from "../HomePage/Navbar";

const Process = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div>
        <div className="mx-auto text-center bg-gray-50 p-20 rounded-lg shadow-md mt-4 mb-8 transition-transform transform hover:scale-125">
          <h1 className="text-3xl font-bold mb-8 text-center text-red-900">
            Pet Adoption Process
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Browse Available Pets
            </h2>
            <p className="text-gray-700 font-semibold">
              Explore our selection of adorable pets waiting for a loving home.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 ">
              2. Submit Adoption Application
            </h2>
            <p className="text-gray-700 font-semibold">
              Fill out our adoption application form with your details and
              preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 ">3. Deilvery</h2>
            <p className="text-gray-700 font-semibold">
              Once your application is approved, our staff will deliver the pet
              to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Finalize Adoption
            </h2>
            <p className="text-gray-700 font-semibold">
              Complete the adoption process and welcome your new furry friend!
            </p>
          </section>
        </div>
        {/* Terms & Condition Section  */}
        <div className="mx-auto bg-gray-200 p-20 rounded-lg shadow-md mt-4 mb-4 transition-transform transform hover:scale-125">
          <h1 className="text-3xl font-bold mb-8 text-center text-red-900">
            Terms & Conditions
          </h1>

          <ul className="flex flex-col justify-center items-center list-disc pl-6">
            <li className="text-gray-700 font-semibold">
              Adopters must be at least 18 years old.
            </li>
            <li className="text-gray-700 font-semibold">
              All pets are spayed/neutered and up-to-date on vaccinations.
            </li>
            <li className="text-gray-700 font-semibold">
              Adoption fees may apply to cover veterinary costs.
            </li>
            <li className="text-gray-700 font-semibold">
              Adopters must provide a safe and loving environment for the pet.
            </li>
            <li className="text-gray-700 font-semibold">
              Terms and conditions are subject to change.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Process;
