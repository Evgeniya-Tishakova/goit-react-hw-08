import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <AppBar />
      <main className="p-6 md:p-10 md:flex justify-between">{children}</main>
    </div>
  );
}
