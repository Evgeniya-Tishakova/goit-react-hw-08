import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectisLoggedIn);

  const getLinkStyle = ({ isActive }) =>
    clsx(
      "px-3 py-1 text-sm font-semibold transition",
      isActive
        ? "text-cyan-400 border-b-2 border-cyan-400"
        : "text-gray-300 hover:text-cyan-400"
    );

  return (
    <nav className="flex items-center space-x-4">
      <NavLink to="/" className={getLinkStyle}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getLinkStyle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
