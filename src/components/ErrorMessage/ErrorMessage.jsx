export default function ErrorMessage({ message }) {
  return (
    <div className="bg-slate-800 border border-red-500 text-red-400 px-6 py-4 rounded-xl shadow-md mt-6 max-w-xl mx-auto text-center">
      <strong className="font-semibold">Error:</strong> {message}
    </div>
  );
}
