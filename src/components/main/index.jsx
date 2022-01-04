import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo";
import DropWindow from "../dropWindow/DropWindow";

function Main(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const searchTodo = useSelector((state) => state.searchTodo);

  const handleDelete = (text) => {
    dispatch({
      type: "delete/todo",
      delete: text,
    });
  };
  const handleCompleted = (id) => {
    dispatch({
      type: "completed/todo",
      id: id,
    });
  };

  return (
    <main>
      <DropWindow />

      <div className="wrapper">
        <ul>
          {todos
            .filter(
              (todo) =>
                todo.todoText.toUpperCase().indexOf(searchTodo.toUpperCase()) >
                -1
            )
            .map((todo, index) => (
              <Todo
                todo={todo}
                key={todo.todoText + index}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
