import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const GoodsBills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation
  const dropdownRef = useRef(null);

  const options = [
    { label: "Generate", value: "generate", path: "consignmentnote" },
    { label: "View", value: "view", path: "consignmentnote" },
    { label: "Download", value: "download", path: "consignmentnote" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    navigate(option.path); // Navigate to the selected route
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer  flex items-center justify-between px-4 py-2 w-40 text-base font-semibold dark:text-sidebar rounded-sm dark:border dark:border-sidebar
                    focus:outline-none"
      >
        Goods Bills
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="absolute mt-1.5 w-36 rounded-sm shadow-lg bg-white  z-10">
          <div className="py-1 text-base font-medium text-sidebar-icon">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left px-4 py-2 hover:bg-cyan-300"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodsBills;
