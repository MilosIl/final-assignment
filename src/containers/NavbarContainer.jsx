import { Navbar } from "@/components";
import { useState } from "react";

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <Navbar
      mobileMenuClick={handleMobileMenuClick}
      avatarClick={handleAvatarClick}
      isOpenMenu={isOpen}
      isDropdownOpen={isDropdownOpen}
      userId={1}
    />
  );
};

export { NavbarContainer };
