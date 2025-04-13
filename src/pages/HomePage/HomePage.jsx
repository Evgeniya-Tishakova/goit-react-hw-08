export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-cyan-400 text-center drop-shadow">
          My Contacts App
        </h1>

        {/* Backend */}
        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-200">🌐 Backend:</h3>
          <p className="text-slate-400">
            The application is connected to a RESTful API that supports user
            authentication and contact management. All user data is stored
            securely, and each user has access only to their own contacts.
          </p>
          <a
            href="https://connections-api.goit.global/"
            className="text-cyan-400 underline hover:text-cyan-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API documentation
          </a>
        </section>

        {/* Features */}
        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-200">📄 Features</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-1">
            <li>User registration & secure login (JWT)</li>
            <li>Private routes for authenticated users</li>
            <li>Add, delete, update and filter personal contacts</li>
            <li>Form validation and instant feedback</li>
            <li>Confirmation modal before deleting contacts</li>
            <li>Live search by name or phone number</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200">
            🛠️ Tech Stack
          </h3>
          <ul className="list-disc list-inside text-slate-400 space-y-1">
            <li>
              <strong>React</strong> Component-based UI
            </li>
            <li>
              <strong>Redux Toolkit</strong> State management + async logic
            </li>
            <li>
              <strong>Redux Persist</strong> Token persistence
            </li>
            <li>
              <strong>Reselect</strong> Memoized selectors
            </li>
            <li>
              <strong>React Router</strong> Navigation & protected routes
            </li>
            <li>
              <strong>React.lazy & Suspense</strong> Lazy loading pages
            </li>
            <li>
              <strong>Axios</strong> HTTP requests
            </li>
            <li>
              <strong>Formik & Yup</strong> Form management and validation
            </li>
            <li>
              <strong>Tailwind CSS</strong> Styling with utility classes
            </li>
            <li>
              <strong>React Hot Toast</strong> Notifications
            </li>
            <li>
              <strong>React Icons</strong> Clean, scalable UI icons
            </li>
            <li>
              <strong>nanoid</strong> Unique ID generation
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
