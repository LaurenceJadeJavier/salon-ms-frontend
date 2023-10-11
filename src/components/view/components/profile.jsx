import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaCheckCircle, FaTimesCircle, FaKey } from "react-icons/fa";
import watson from "../components/assets/watson.jpg";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmationShown, setIsConfirmationShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [adminData, setAdminData] = useState({
    username: "AdminUser",
    profilePicture: watson,
    contactInfo: {
      email: "Laurencejade22@gmail.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
    },
    newPassword: "",
    newPasswordRepeat: "",
    oldPassword: "", // Add a state for old password
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setIsLoading(true);

    // Simulate an API call or database update
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmationShown(true);
      setTimeout(() => {
        setIsConfirmationShown(false);
      }, 2000); // Delay for 2 seconds (you can adjust this)

      // You can send the updated data to your backend here
    }, 2000); // Simulate a 2-second loading period
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSaveClick();
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>

          <form onSubmit={handleFormSubmit}>
            {/* Profile Picture Container */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={adminData.profilePicture}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 p-1 bg-blue-500 text-white rounded-full cursor-pointer transition-transform transform hover:scale-110">
                    <MdEdit size={18} onClick={handleEditClick} />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (e) => {
                            setAdminData({
                              ...adminData,
                              profilePicture: e.target.result,
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                )}
              </div>
              {/* Profile Details Container */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <label className="font-semibold">Username:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border-b border-gray-300 ml-2"
                      value={adminData.username}
                      onChange={(e) =>
                        setAdminData({ ...adminData, username: e.target.value })
                      }
                    />
                  ) : (
                    <p className="ml-2">{adminData.username}</p>
                  )}
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Email:</label>
                  {isEditing ? (
                    <input
                      type="email"
                      className="border-b border-gray-300 ml-2"
                      value={adminData.contactInfo.email}
                      onChange={(e) =>
                        setAdminData({
                          ...adminData,
                          contactInfo: {
                            ...adminData.contactInfo,
                            email: e.target.value,
                          },
                        })
                      }
                    />
                  ) : (
                    <p className="ml-2">{adminData.contactInfo.email}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="flex items-center">
                    <label className="font-semibold">Old Password:</label>
                    <input
                      type="password"
                      className="border-b border-gray-300 ml-2"
                      value={adminData.oldPassword}
                      onChange={(e) =>
                        setAdminData({ ...adminData, oldPassword: e.target.value })
                      }
                    />
                  </div>
                )}
                <div className="mt-2">
                  {isEditing ? (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2 transition-transform transform hover:scale-110"
                        type="submit"
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md transition-transform transform hover:scale-110"
                        onClick={() => {
                          setIsEditing(false);
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 transition-transform transform hover:scale-110"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>

          {isConfirmationShown && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-2 text-green-600">
                  <FaCheckCircle size={24} />
                  <span>Changes saved successfully</span>
                </div>
              </div>
            </div>
          )}

          {/* Password Change */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Password Change</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="flex items-center">
                <label className="font-semibold">New Password:</label>
                <input
                  type="password"
                  className="border-b border-gray-300 ml-2"
                  value={adminData.newPassword}
                  onChange={(e) =>
                    setAdminData({ ...adminData, newPassword: e.target.value })
                  }
                />
                <FaKey className="ml-2" size={18} />
              </div>
              <div className="flex items-center mt-2">
                <label className="font-semibold">Type New Password Again:</label>
                <input
                  type="password"
                  className="border-b border-gray-300 ml-2"
                  value={adminData.newPasswordRepeat}
                  onChange={(e) =>
                    setAdminData({ ...adminData, newPasswordRepeat: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2 transition-transform transform hover:scale-110"
                  type="submit"
                >
                  Save Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;