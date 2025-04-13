import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="mt-8 mb-6 text-white">
      <p className="mb-2 text-lg font-medium text-slate-300">
        🔍 Find contacts by name
      </p>
      <input
        type="text"
        value={filter ?? ""}
        onChange={handleFilter}
        placeholder="Start typing..."
        className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
      />
    </div>
  );
}
