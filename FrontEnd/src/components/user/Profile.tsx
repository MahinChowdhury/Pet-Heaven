import { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = Cookies.get("username");

    console.log(username);

    axios
      .get(`http://localhost:3001/userProfile?username=${username}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto bg-gray-100 mt-8 p-20">
        <div className="max-w-md mx-auto px-16 py-24 bg-white shadow-lg rounded-md overflow-hidden">
          <div className="flex items-center justify-center bg-gray-900 text-white h-20 mb-6">
            {/* <img
              src="user-avatar.jpg"
              alt="User Avatar"
              className="w-16 h-16 rounded-full mr-4"
            /> */}
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-sm text-center">User</p>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">User Information</h3>
            <ul className="list-disc">
              <li className="mb-2">
                <span className="font-semibold">Id:</span> {user.id}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> {user.email}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Contact No:</span>{" "}
                {user.contactNumber}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Address:</span> {user.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
