import Navbar from "../HomePage/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center text-red-900 text-2xl font-bold my-4">
        About Us
      </div>
      <div className="p-4 text-xl mb-4">
        Petfinder is an online, searchable database of animals who need homes.
        It is also a directory of nearly 11,000 animal shelters and adoption
        organizations across the U.S., Canada and Mexico. Organizations maintain
        their own home pages and available-pet databases.
      </div>
      <div className="p-4 text-xl mb-4 font-semibold">
        OUR MISSION To use Internet technology and the resources it can generate
        to:
      </div>
      <ol className="text-xl p-4">
        <li>
          1. Increase public awareness of the availability of high-quality
          adoptable pets.
        </li>
        <li>
          2. Increase the overall effectiveness of pet adoption programs across
          North America to the extent that the euthanasia of adoptable pets is
          eliminated.
        </li>
        <li>3. Elevate the status of pets to that of family member.</li>
      </ol>

      <div className="mt-6 p-4 text-xl">
        From the comfort of their personal computers, pet lovers can search for
        a pet that best matches their needs. They can then reference a shelter’s
        web page and discover what services it offers. Petfinder also includes
        discussion forums, a pet-care resource directory and a library of free
        pet-care articles to help keep pets in their homes. Petfinder is updated
        DAILY. Organizations wishing to participate should register. A contact
        person should be responsible for direct communications with Petfinder.
        Only nonprofit organizations will be included (but Federal 501(c)(3)
        status is not necessary).
      </div>
    </div>
  );
};

export default About;
