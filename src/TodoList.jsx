import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./store/todosReducer";

const TodoList = () => {
  const [newtodo, setNewTodo] = useState("");
  const [newtodo1, setNewTodo1] = useState("");
  const [newtodo2, setNewTodo2] = useState("");
  const user = useSelector((state) => state.name);
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
      <div className="wrapper">
        <div>
          TodoList:
          <input
            className="input"
            placeholder="Введите имя"
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newtodo}
          />
          <input
            className="input"
            placeholder="Введите возраст"
            type="number"
            onChange={(e) => setNewTodo1(e.target.value)}
            value={newtodo1}
          />
          <input
            className="input"
            placeholder="Введите пол"
            type="text"
            onChange={(e) => setNewTodo2(e.target.value)}
            value={newtodo2}
          />
        </div>
        <div>
          <button className="btn" onClick={handleClick}>
            Добавить
          </button>
        </div>
      </div>
      <ul>{user && user.map((user) => <li>{user}</li>)}</ul>
    </div>
  );
};
export default TodoList;
