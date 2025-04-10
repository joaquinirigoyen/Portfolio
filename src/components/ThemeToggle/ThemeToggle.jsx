"use client";
import { useState, useEffect } from "react";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setChecked(storedTheme === "dark");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const handleChange = () => {
    const newTheme = checked ? "light" : "dark";
    setChecked(!checked);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      offColor="#ccc"
      onColor="#333"
      uncheckedIcon={
        <div className="flex items-center justify-center h-full text-slate-800">
          <FiSun size={16} />
        </div>
      }
      checkedIcon={
        <div className="flex items-center justify-center h-full text-gray-300">
          <FiMoon size={16} />
        </div>
      }
      handleDiameter={22}
      height={26}
      width={50}
      className="ml-4"
    />
  );
};

export default ThemeToggle;
