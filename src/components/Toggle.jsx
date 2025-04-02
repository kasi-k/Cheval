import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Toggle = ({ hideToggle = false }) => {
  // Default to dark mode unless explicitly set to false in localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") !== "false"
  );

  useEffect(() => {
    document.body.classList.add("dark"); // Always enable dark mode
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  if (hideToggle) {
    return null; // Hide toggle, keeping dark mode always on
  }

  return (
    <div>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? <BsToggleOn className="size-7" /> : <BsToggleOff className="size-7" />}
      </button>
    </div>
  );
};

export default Toggle;
