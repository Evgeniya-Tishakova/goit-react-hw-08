import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 space-y-4 w-full">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="w bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-md"
        >
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
