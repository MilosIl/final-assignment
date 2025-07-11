import { useState } from "react";
import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import {
  IconHamburgerMenu,
  IconHome,
  IconLogout,
  IconUser,
  IconArrowDown,
} from "@/assets";
import { NavbarItem } from "./NavbarItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 py-2">
      <div className="font-bold text-xl">LOGO</div>

      {/* Mobile Menu Button */}
      <div
        onClick={handleMobileMenuClick}
        className="relative md:hidden cursor-pointer"
      >
        <IconHamburgerMenu />
        {isOpen && (
          <ul className="absolute right-0 top-8 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 min-w-48 z-50">
            <NavbarItem icon={<IconHome />} to={"/"}>
              Home
            </NavbarItem>
            <NavbarItem icon={<IconUser />} to={"/profile"}>
              My Profile
            </NavbarItem>
            <NavbarItem icon={<ToggleDarkMode />}>Dark Mode</NavbarItem>
            <NavbarItem icon={<IconLogout />}>Logout</NavbarItem>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ToggleDarkMode />
        <div className="relative">
          <div
            onClick={handleAvatarClick}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              JD
            </div>
            <span>John Doe</span>
            <IconArrowDown />
          </div>

          {isDropdownOpen && (
            <ul className="absolute right-0 top-12 bg-slate-300 shadow-lg rounded-lg p-3 gap-4.5 flex flex-col min-w-40 z-50">
              <NavbarItem icon={<IconUser />} to={"/profile"}>
                My Profile
              </NavbarItem>
              <NavbarItem icon={<IconLogout />}>Logout</NavbarItem>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
