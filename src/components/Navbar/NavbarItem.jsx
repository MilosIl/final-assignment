import { Link } from "react-router";

const NavbarItem = ({ to, children, icon, onClick }) => {
  const handleClick = (e) => {
    onClick(e);
  };
  return (
    <li className="mb-2" onClick={handleClick}>
      <Link to={to} className="cursor-pointer items-center  flex gap-2">
        {icon}
        {children}
      </Link>
    </li>
  );
};

export { NavbarItem };
