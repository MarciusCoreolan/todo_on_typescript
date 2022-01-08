import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Todo from "../todo";
import DropWindow from "../dropWindow/DropWindow";
import {useTypeSelector} from "../../hooks/useTypeSelector";

function Main() {
    const dispatch = useDispatch();
    const todos = useTypeSelector((state) => state.todos);
    const searchTodo = useTypeSelector((state) => state.searchTodo);
    const [delAnim, setDelAnim] = useState('')

    const handleDelete = (id:string) => {
        setDelAnim(id)
        setTimeout(()=>{
            dispatch({
                type: "delete/todo",
                payload: id,
            });
        }, 500)
    };
    const handleCompleted = (id:string) => {
        dispatch({
            type: "completed/todo",
            payload: id,
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
                        .map((todo) => (
                            <Todo
                                delAnim={delAnim}
                                todo={todo}
                                key={todo.id}
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
