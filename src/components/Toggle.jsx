import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedTheme);
    document.body.classList.toggle("dark", storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? (
          <BsToggleOn className="size-7" />
        ) : (
          <BsToggleOff className="size-7" />
        )}
      </button>
    </div>
  );
};

export default Toggle;
