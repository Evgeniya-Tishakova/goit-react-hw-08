import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-6 text-center">
      <p className="text-6xl font-bold text-cyan-400 mb-4 animate-pulse">404</p>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-lg text-slate-400 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-6 rounded-lg transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
