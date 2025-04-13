import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const naigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        naigate("/contacts");
      })
      .catch();
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className="space-y-6" autoComplete="off">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            autoComplete="username"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-2"
          >
            Password
          </label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            autoComplete="current-password"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
}
