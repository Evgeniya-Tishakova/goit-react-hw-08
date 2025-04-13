import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getLinkStyle = ({ isActive }) =>
  clsx(
    "px-3 py-1 text-sm font-semibold transition",
    isActive
      ? "text-cyan-400 border-b-2 border-cyan-400"
      : "text-gray-300 hover:text-cyan-400"
  );

export default function AuthNav() {
  return (
    <div className="flex space-x-4">
      <NavLink to="/register" className={getLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={getLinkStyle}>
        Log in
      </NavLink>
    </div>
  );
}
