import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./store/todosReducer";

const TodoList = () => {
  const [newtodo, setNewTodo] = useState([""]);
  const [newtodo1, setNewTodo1] = useState("");
  const [newtodo2, setNewTodo2] = useState("");
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      newtodo.trim() !== "" &&
      newtodo1.trim() !== "" &&
      newtodo2.trim() !== ""
    ) {
      dispatch(addTodo(newtodo));
      dispatch(addTodo(newtodo1));
      dispatch(addTodo(newtodo2));
      setNewTodo("");
      setNewTodo1("");
      setNewTodo2("");
    }
  };
  return (
    <div>
      TodoList
      <input
        placeholder="Введите имя"
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newtodo}
      />
      <input
        placeholder="Введите возраст"
        type="number"
        onChange={(e) => setNewTodo1(e.target.value)}
        value={newtodo1}
      />
      <input
        placeholder="Введите пол"
        type="text"
        onChange={(e) => setNewTodo2(e.target.value)}
        value={newtodo2}
      />
      <button onClick={handleClick}>Добавить</button>
      <ul>{user && user.map((u) => <li>{u}</li>)}</ul>
    </div>
  );
};
export default TodoList;
