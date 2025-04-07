import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div className={css.container}>
        <p className={css.text}>
          <BsPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
