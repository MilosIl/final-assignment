import { Link } from "react-router";

const NavbarItem = ({ to, children, icon, onClick }) => {
  return (
    <li className="flex items-center gap-3 justify-start" onClick={onClick}>
      {icon && <span>{icon}</span>}
      {to ? (
        <Link to={to}>{children}</Link>
      ) : (
        <span className="cursor-pointer">{children}</span>
      )}
    </li>
  );
};

export { NavbarItem };
