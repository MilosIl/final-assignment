import {
  IconHamburgerMenu,
  IconHome,
  IconLogout,
  IconUser,
  IconArrowDown,
} from "@/assets";
import { NavbarItem } from "./NavbarItem";
import { Link } from "react-router";
import { ToggleThemeContainer } from "@/containers";
import logo from "@/assets/logo.png";
import { Button } from "../ui";

const Navbar = ({
  mobileMenuClick,
  avatarClick,
  isOpenMenu,
  isDropdownOpen,
  userId,
  logout,
  firstName,
  image,
}) => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 sticky top-0 z-10 bg-sky-200 text-slate-800 transition-colors duration-300">
      <Link
        to={"/"}
        className="font-bold text-xl w-16 overflow-hidden rounded-full block"
      >
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </Link>

      {/* Mobile Menu Button */}
      {firstName ? (
        <div
          onClick={mobileMenuClick}
          className="relative md:hidden cursor-pointer"
        >
          <IconHamburgerMenu />
          {isOpenMenu && (
            <ul className="absolute right-0 top-8 dark:bg-slate-800 bg-sky-50 shadow-lg rounded-lg p-4 flex flex-col gap-2 min-w-48 z-50 dark:text-sky-100 text-slate-800 transition-all duration-300 ease-in-out">
              <NavbarItem icon={<IconHome />} to={"/"}>
                Home
              </NavbarItem>
              <NavbarItem icon={<IconUser />} to={`/profile/${userId}`}>
                My Profile
              </NavbarItem>
              <li className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer">
                <span>
                  <ToggleThemeContainer />
                </span>

                <span className="block">Change Theme</span>
              </li>
              <NavbarItem icon={<IconLogout />} onClick={logout}>
                Logout
              </NavbarItem>
            </ul>
          )}
        </div>
      ) : (
        <div className="md:hidden">
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ToggleThemeContainer />
        {firstName ? (
          <div className="relative">
            <div
              onClick={avatarClick}
              className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-sky-100 transition-all duration-300 ease-in-out p-2 rounded"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border p-1 border-teal-500">
                <img src={image} alt="avatar" />
              </div>
              <span className="text-sm font-semibold">{firstName}</span>
              <IconArrowDown />
            </div>

            {isDropdownOpen && (
              <ul className="absolute right-0 top-12 dark:bg-slate-800 bg-sky-50 shadow-lg rounded-lg p-3 gap-4.5 flex flex-col min-w-40 z-50 dark:text-sky-100 text-slate-800 transition-all duration-300 ease-in-out">
                <NavbarItem icon={<IconUser />} to={`/profile/${userId}`}>
                  My Profile
                </NavbarItem>
                <NavbarItem icon={<IconLogout />} onClick={logout}>
                  Logout
                </NavbarItem>
              </ul>
            )}
          </div>
        ) : (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
