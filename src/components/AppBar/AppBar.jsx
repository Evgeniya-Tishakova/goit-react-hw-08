import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <header className="bg-slate-900 border-b border-cyan-500 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Navigation / Logo */}
      <div className="flex items-center space-x-6">
        <Navigation />
      </div>

      {/* User/Auth section */}
      <div className="md:flex items-center space-x-4">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
