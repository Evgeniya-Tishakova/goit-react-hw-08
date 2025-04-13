import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import {
  deleteContact,
  editContact,
  fetchContacts,
} from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserSchema } from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted"))
      .catch(() => toast.error("Failed to delete contact"));
    setShowConfirm(false);
  };

  const handleEditContact = (values, { resetForm }) => {
    const contact = {
      id,
      name: values.name,
      number: values.number,
    };
    dispatch(editContact(contact))
      .unwrap()
      .then(() => {
        setShowEdit(false);
        dispatch(fetchContacts());
      });
    resetForm();
  };

  return (
    <>
      <div className="flex flex-col flex-row md:items-center justify-between gap-4 bg-slate-700 p-4 rounded-lg shadow">
        {!showEdit && (
          <div className="grid grid-cols-4 gap-1">
            <div class="col-span-3">
              <p className="flex items-center gap-2 text-base">
                <BsPersonFill className="text-cyan-400" />
                <span>{name}</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <FaPhoneAlt className="text-cyan-400" />
                <span>{number}</span>
              </p>
            </div>
            <div class="col-span-1">
              <button
                onClick={() => setShowEdit(!showEdit)}
                className="self-start md:self-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </button>

              <button
                onClick={() => setShowConfirm(true)}
                className="self-start md:self-center bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {showEdit && (
          <>
            <Formik
              initialValues={{ name, number }}
              onSubmit={handleEditContact}
              validationSchema={UserSchema}
            >
              {() => (
                <Form className="grid grid-cols-4 gap-1 w-full">
                  <div class="col-span-3">
                    {/* Name Field */}
                    <div className="flex items-center gap-2 text-base">
                      <BsPersonFill className="text-cyan-400" />
                      <Field
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Murk Zuckerberg"
                        className=""
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-400 text-sm"
                      />
                    </div>
                    {/* Number Field */}
                    <div className="flex items-center gap-2 text-base">
                      <FaPhoneAlt className="text-cyan-400" />
                      <Field
                        name="number"
                        type="text"
                        id="number"
                        placeholder="+38 050 123 45 67"
                        className=""
                      />
                      <ErrorMessage
                        name="number"
                        component="span"
                        className="text-red-400 text-sm"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div class="col-span-1">
                    <button
                      type="submit"
                      className="self-start md:self-center bg-cyan-500 hover:bg-cayn-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>

      {/* Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-white w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="text-sm text-slate-300 mb-6">
              Are you sure you want to delete <strong>{name}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md font-semibold"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
