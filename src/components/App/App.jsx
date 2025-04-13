import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { GiStrong } from "react-icons/gi";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-cyan-400 text-lg font-medium">
      <GiStrong className="text-5xl mb-4 animate-pulse" />
      Syncing your session... Please wait
    </div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#e0f2fe",
              borderRadius: "0.75rem",
              border: "1px solid #0891b2",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "#22d3ee",
                secondary: "#0f172a",
              },
            },
            error: {
              style: {
                background: "#7f1d1d",
                color: "#fecaca",
              },
            },
          }}
        />
      </Suspense>
    </Layout>
  );
}
