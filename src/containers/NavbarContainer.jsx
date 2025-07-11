import { Navbar } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const NavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
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
      userId={user?.id}
      logout={logout}
      firstName={user?.firstName}
      lastName={user?.lastName}
    />
  );
};

export { NavbarContainer };
