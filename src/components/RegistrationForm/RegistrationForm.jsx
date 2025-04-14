import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    setErrorMessage("");

    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Registration error:", error);

        if (
          error?.response?.status === 400 &&
          error?.response?.data?.message?.includes("email")
        ) {
          setErrorMessage(
            "A user with this email already exists. Try logging in."
          );
        } else {
          setErrorMessage(
            "Registration failed. Please check your input and try again."
          );
        }
      });

    actions.setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-800 border border-cyan-500 shadow-2xl rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8 tracking-wide">
          Register to Manage Contacts
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">
            {errorMessage}
          </div>
        )}

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off" className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
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
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
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
                placeholder="Create a strong password"
                autoComplete="new-password"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
