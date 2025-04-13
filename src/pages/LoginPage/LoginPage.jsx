import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen m-auto flex items-center justify-center from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-lg bg-slate-800 border border-cyan-500 shadow-xl rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8 tracking-wide">
          Log In to Your Account
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
