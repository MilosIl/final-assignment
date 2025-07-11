import { ToggleDarkMode } from "../ToggleDarkMode";
import {
  IconHamburgerMenu,
  IconHome,
  IconLogout,
  IconUser,
  IconArrowDown,
} from "@/assets";
import { NavbarItem } from "./NavbarItem";
import { Link } from "react-router";
import { Avatar } from "../Avatar/Avatar";

const Navbar = ({
  mobileMenuClick,
  avatarClick,
  isOpenMenu,
  isDropdownOpen,
  userId,
  logout,
  firstName,
  lastName,
}) => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2">
      <Link to={"/"} className="font-bold text-xl">
        LOGO
      </Link>

      {/* Mobile Menu Button */}
      <div
        onClick={mobileMenuClick}
        className="relative md:hidden cursor-pointer"
      >
        <IconHamburgerMenu />
        {isOpenMenu && (
          <ul className="absolute right-0 top-8 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 min-w-48 z-50">
            <NavbarItem icon={<IconHome />} to={"/"}>
              Home
            </NavbarItem>
            <NavbarItem icon={<IconUser />} to={`/profile/${userId}`}>
              My Profile
            </NavbarItem>
            <NavbarItem icon={<ToggleDarkMode />}>Dark Mode</NavbarItem>
            <NavbarItem icon={<IconLogout />} onClick={logout}>
              Logout
            </NavbarItem>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ToggleDarkMode />
        <div className="relative">
          <div
            onClick={avatarClick}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <Avatar firstName={firstName} lastName={lastName} />
            <IconArrowDown />
          </div>

          {isDropdownOpen && (
            <ul className="absolute right-0 top-12 bg-slate-300 shadow-lg rounded-lg p-3 gap-4.5 flex flex-col min-w-40 z-50">
              <NavbarItem icon={<IconUser />} to={`/profile/${userId}`}>
                My Profile
              </NavbarItem>
              <NavbarItem icon={<IconLogout />} onClick={logout}>
                Logout
              </NavbarItem>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
