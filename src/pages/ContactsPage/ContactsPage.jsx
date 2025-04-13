import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ImDownload3 } from "react-icons/im";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto p-6 text-white w-full">
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10 drop-shadow">
        My Phonebook
      </h1>

      <ContactForm />

      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}

      {!isLoading && !isError && (
        <>
          <SearchBox />
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <div className="mt-10 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center shadow-inner">
              <p className="text-slate-300 text-lg flex items-center justify-center gap-2">
                No contacts yet. Add your first contact below
                <ImDownload3 className="text-cyan-400 text-xl animate-bounce" />
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
