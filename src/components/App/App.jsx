import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        {isLoading && <b>Loading...</b>}
        {isError && <b>Error...</b>}
        <SearchBox />
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
}
