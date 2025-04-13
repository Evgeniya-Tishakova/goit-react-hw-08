import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex items-center gap-4 bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl shadow">
      <p className="text-cyan-400 font-medium">Welcome, {user.name}</p>
      <button
        type="button"
        onClick={handleLogout}
        className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold px-4 py-1.5 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}
