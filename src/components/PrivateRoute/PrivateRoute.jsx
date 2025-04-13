import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
