import Navbar from "../HomePage/Navbar";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 px-4">
        <h2 className="mt-5 pt-4 mb-4 text-center font-bold text-2xl">
          Contact Us
        </h2>
        <hr className="border-t-2 border-gray-300" />
        <div className="h-line"></div>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Ab, porro tenetur asperiores dolor, unde nulla voluptatibus eius,
          voluptatem cumque consectetur quod! <br />
          Numquam inventore doloremque rerum voluptate voluptatibus, quam vitae
          quaerat.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 bg-white rounded myshadow p-4">
            <iframe
              className="w-full rounded myshadow mb-4"
              height="300px"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.718407209366!2d90.33966316294494!3d23.87694205788804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c415dabf6e4d%3A0xb9fa0b309dbe4785!2sUttara%20Sector%2011%20No%20Park!5e0!3m2!1sen!2sbd!4v1699903894365!5m2!1sen!2sbd"
              loading="lazy"
            ></iframe>
            <h5>Address</h5>
            <a
              href="https://goo.gl/maps/Z64V3andjSbCWWTZ9"
              target="_blank"
              className="d-inline-block text-decoration-none text-dark mb-4"
            >
              <i className="fa-solid fa-location-dot mr-2"></i>Uttara, Dhaka
              Bangladesh
            </a>
            <h5>Call Us: </h5>
            <a
              href=""
              className="d-inline-block mb-2 text-decoration-none text-dark"
            >
              <i className="fa-solid fa-phone"></i>+8801884214652
            </a>
            <br />
            <a
              href=""
              className="d-inline-block mb-2 text-decoration-none text-dark"
            >
              <i className="fa-solid fa-phone"></i>+8801584214652
            </a>

            <h5 className="mt-3">Email: </h5>
            <a
              href="mailto:ask.mahin00021@gmail.com"
              className="d-inline-block mb-2 text-decoration-none text-dark"
            >
              maria@gmail.com
            </a>

            <h5 className="mt-3">Follow Us: </h5>
            <div className="flex mt-2">
              <a
                href=""
                className="d-inline-block mb-2 text-decoration-none text-dark mr-2"
              >
                <BsFacebook />
              </a>
              <a
                href=""
                className="d-inline-block mb-2 text-decoration-none text-dark mr-2"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="d-inline-block mb-2 text-decoration-none text-dark mr-2"
              >
                <BsInstagram />
              </a>
              <a
                href=""
                className="d-inline-block mb-2 text-decoration-none text-dark mr-2"
              >
                <BsTwitch />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 px-4">
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <form action="/userqueries" method="POST">
                <h5 className="text-lg font-semibold mb-4">Send a Message</h5>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    type="text"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 resize-none"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name="send"
                  className="btn mt-4 px-4 py-2 text-white rounded bg-gray-900 hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-active"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
