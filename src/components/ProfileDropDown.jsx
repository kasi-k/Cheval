import React, { useState } from "react";
import Logout from "../pages/auth/Logout";

const ProfileDropdown = (props) => {
  // const [logoutModal, setLogoutModal] = useState(false);
  const handleLogout = () =>{
    props.setLogoutModal(true)
   props.setProfileDropDown(false)
  }
  return (
    <>
    <div  className="absolute right-4  w-40 bg-white shadow-lg rounded-sm px-2 py-1  z-10">
      <div className="text-sidebar-icon">
        <p className="px-4 py-2 hover:bg-sidebar hover:text-black cursor-pointer rounded-md">
          Edit Profile
        </p>
        <p  onClick={() => handleLogout()} className="px-4 py-2 hover:bg-sidebar hover:text-black cursor-pointer rounded-md">Logout</p>
        <p className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer rounded-sm">
          Delete Account
        </p>
      </div>
    </div>
    {/* {logoutModal && <Logout onclose={()=>setLogoutModal(false)}/>} */}
    </>
  );
};

export default ProfileDropdown;
