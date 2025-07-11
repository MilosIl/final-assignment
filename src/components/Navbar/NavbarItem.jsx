import { Link } from "react-router";

const NavbarItem = ({ to, children, icon }) => {
  return (
    <li className="flex items-center gap-3 justify-start">
      {icon && <span>{icon}</span>}
      <Link to={to}>{children}</Link>
    </li>
  );
};

export { NavbarItem };
