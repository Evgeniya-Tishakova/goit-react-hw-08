import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {() => (
        <Form className="mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg max-w-md w-full text-white space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400 text-center">
            Add Contact
          </h2>

          {/* Name Field */}
          <div className="space-y-1">
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>
            <Field
              name="name"
              type="text"
              id="name"
              placeholder="Murk Zuckerberg"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-400 text-sm"
            />
          </div>

          {/* Number Field */}
          <div className="space-y-1">
            <label htmlFor="number" className="block font-semibold">
              Number
            </label>
            <Field
              name="number"
              type="text"
              id="number"
              placeholder="+38 050 123 45 67"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-400"
            />
            <ErrorMessage
              name="number"
              component="span"
              className="text-red-400 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
