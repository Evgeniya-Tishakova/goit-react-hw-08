import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
