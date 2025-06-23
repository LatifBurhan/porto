import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/paint.png";
import darkModeIcon from "../assets/night_mode.svg";
import lightModeIcon from "../assets/light_mode.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Saya", href: "#tentang" },
    { name: "Skill", href: "#skill" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-white/50 dark:bg-gray-900/70 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 w-full fixed top-0 z-50 font-rubik transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#010204] dark:text-white">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <a href={item.href} className="text-[#2D46B9] dark:text-pink-500 group-hover:text-[#D4018D] dark:group-hover:text-blue-500 transition">
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#D4018D] dark:bg-blue-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Tombol Mode dan Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Toggle Dark Mode Slider */}
          <div onClick={() => setIsDarkMode(!isDarkMode)} className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? "bg-blue" : "bg-blue"}`}>
            <div className={`w-6 h-6 rounded-full bg-blue shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? "translate-x-6" : ""} flex items-center justify-center`}>
              <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="Mode Icon" className="w-4 h-4" />
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <button className="md:hidden text-[#2D46B9] dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-40 transition-opacity duration-300">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 w-3/4 max-w-sm text-center space-y-6 animate-fadeIn">
            {menuItems.map((item) => (
              <li key={item.name} className="list-none relative group cursor-pointer" onClick={() => setIsOpen(false)}>
                <a href={item.href} className="text-2xl text-[#2D46B9] dark:text-pink-500 group-hover:text-[#D4018D] dark:group-hover:text-blue-500 transition">
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#D4018D] dark:bg-blue-500 transition-all group-hover:w-full"></span>
              </li>
            ))}

            {/* Tombol Close */}
            <button className="mt-4 text-[#2D46B9] dark:text-white" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
    