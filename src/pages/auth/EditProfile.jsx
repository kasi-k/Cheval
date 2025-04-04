import React, { useState } from "react";
import NavBar from "../../components/NavBar";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    password: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar title="Profile" pagetitle="Edit Profile" />

      <div className="flex justify-end mb-2 mx-2 gap-2">
        <button className="text-sidebar border border-sidebar rounded-md px-6 py-1">Cancel</button>
        <button className="bg-teal-500 text-black px-6  py-2 rounded-md hover:bg-teal-600">
          Save
        </button>
      </div>
      <div className="bg-darkgray text-white p-8 rounded-lg shadow-lg w-full ">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-6">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
        </div>

        {/* Profile Picture */}
        <div className="flex items-center space-x-4 mb-6">
        <span className="text-gray-400">Profile Picture</span>
          <div className="w-16 h-16 flex items-center justify-center border  rounded-full text-xl font-semibold">
            KA
          </div>
       
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name <span className="text-red-600 font-semibold text-xl">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full  text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name<span className="text-red-600 font-semibold text-xl">*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Role<span className="text-red-600 font-semibold text-xl">*</span></label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password<span className="text-red-600 font-semibold text-xl">*</span></label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full  text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Email<span className="text-red-600 font-semibold text-xl">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full  text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number<span className="text-red-600 font-semibold text-xl">*</span></label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full  text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
