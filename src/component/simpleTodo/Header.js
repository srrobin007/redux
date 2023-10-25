/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../../assets/images/double-tick.png";
import noteImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../../redux/todos/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(todo));
    setTodo(" ");
  };
  const allComplete = () => {
    dispatch(allCompleted());
  };
  const clearComplete = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={todo}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        />
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          role="presentation"
          className="flex space-x-1 cursor-pointer"
          onClick={allComplete}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          role="presentation"
          className="cursor-pointer"
          onClick={clearComplete}
        >Clear completed
        </li>
      </ul>
    </div>
  );
}
