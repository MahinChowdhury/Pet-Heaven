import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      const data = await response.json();
      setMessage(data.message);
      navigate("/login");
    } catch (error) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 mb-4 border rounded-md"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
};

export default ResetPassword;
