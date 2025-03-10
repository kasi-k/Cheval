import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRoleAccess = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState("");
  const [accessLevels, setAccessLevels] = useState([]);
  const [features, setFeatures] = useState([
    { name: "Dashboard", value: "dashboard", checked: false },
    { name: "Booking Enquiries", value: "bookingenquiries", checked: false },
  ]);

  const [errors, setErrors] = useState({
    roleName: "",
    featurePermissions: "",
  });

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value);
  };

  const handleFeatureChange = (index) => {
    const newFeatures = [...features];
    newFeatures[index].checked = !newFeatures[index].checked;

    if (newFeatures[index].checked) {
      setAccessLevels([
        ...accessLevels,
        { feature: newFeatures[index].value, permissions: [] },
      ]);
    } else {
      setAccessLevels(
        accessLevels.filter(
          (level) => level.feature !== newFeatures[index].value
        )
      );
    }

    setFeatures(newFeatures);
  };

  const handlePermissionChange = (index, permission) => {
    const newAccessLevels = [...accessLevels];
    const featureIndex = newAccessLevels.findIndex(
      (level) => level.feature === features[index].value
    );

    if (newAccessLevels[featureIndex].permissions.includes(permission)) {
      newAccessLevels[featureIndex].permissions = newAccessLevels[
        featureIndex
      ].permissions.filter((p) => p !== permission);
    } else {
      newAccessLevels[featureIndex].permissions.push(permission);
    }
    setAccessLevels(newAccessLevels);
  };

  const handleAllPermissionChange = (index) => {
    const newAccessLevels = [...accessLevels];
    const featureIndex = newAccessLevels.findIndex(
      (level) => level.feature === features[index].value
    );

    if (newAccessLevels[featureIndex].permissions.length === 5) {
      newAccessLevels[featureIndex].permissions = [];
    } else {
      newAccessLevels[featureIndex].permissions = [
        "view",
        "create",
        "edit",
        "delete",
        "download",
      ];
    }
    setAccessLevels(newAccessLevels);
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     let formIsValid = true;
  //     const newErrors = {
  //       roleName: "",
  //       featurePermissions: "",
  //     };

  //     // Validation for role name
  //     if (roleName.trim() === "") {
  //       newErrors.roleName = "Role name is required.";
  //       formIsValid = false;
  //     }

  //     // Validation for feature permissions
  //     accessLevels.forEach((level) => {
  //       if (level.permissions.length === 0) {
  //         newErrors.featurePermissions =
  //           "Please select at least one permission for each selected feature.";
  //         formIsValid = false;
  //       }
  //     });

  //     setErrors(newErrors);

  //     if (!formIsValid) {
  //       return;
  //     }

  //     const newAccessLevels = [...accessLevels];

  //     const roleAccessLevel = {
  //       role_name: roleName,
  //       accessLevels: newAccessLevels,
  //       status: "active",
  //       created_by_user: localStorage.getItem("name"),
  //     };

  //     try {
  //       const response = await axios.post(`${API}/role/post`, roleAccessLevel, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.status === 200) {
  //         toast.success("Role created Successfully");
  //         navigate("/setting");
  //       } else {
  //         console.error("Error in posting data", response);
  //         toast.error("Failed to Upload");
  //       }
  //     } catch (error) {
  //       console.error("Error in posting data", error);
  //     }
  //   };

  return (
    <form className="text-white">
      <div>
        <div className="flex gap-6 text-base items-center ">
          <label>Role Name:</label>
          <input
            type="text"
            value={roleName}
            onChange={handleRoleNameChange}
            className="w-80 text-start border  rounded-lg ml-2 px-3 py-1 outline-none"
          />
        </div>
        {errors.roleName && (
          <p className="error mt-3 text-red-500">{errors.roleName}</p>
        )}
        <div className="md:mx-6 mx-1 my-3 font-lexend overflow-y-auto no-scrollbar dark:bg-darkgray bg-white rounded-lg">
          <div className="px-6 py-6 overflow-auto no-scrollbar">
            <div className="">
              <h3 className=" text-base text-primary ">Settings</h3>

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="md:grid md:grid-cols-3 mb-3 text-base gap-3 items-start"
                >
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={feature.checked}
                      onChange={() => handleFeatureChange(index)}
                    />
                    <label>{feature.name}</label>
                  </div>
                  <div
                    className={`transition-all duration-300 ${
                      feature.checked
                        ? "opacity-100"
                        : "opacity-0 h-0 overflow-hidden"
                    }`}
                  >
                    <div className="flex  gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={
                            accessLevels.find(
                              (level) => level.feature === features[index].value
                            )?.permissions.length === 5 || false
                          }
                          onChange={() => handleAllPermissionChange(index)}
                        />
                        <label>All</label>
                      </div>
                      {["view", "create", "edit", "delete", "download"].map(
                        (perm) => (
                          <div
                            key={perm}
                            className="flex items-center gap-2 text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={
                                accessLevels
                                  .find(
                                    (level) =>
                                      level.feature === features[index].value
                                  )
                                  ?.permissions.includes(perm) || false
                              }
                              onChange={() =>
                                handlePermissionChange(index, perm)
                              }
                            />
                            <label className="capitalize">{perm}</label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddRoleAccess;
