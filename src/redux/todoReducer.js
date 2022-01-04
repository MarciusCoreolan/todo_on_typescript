const initialState = {
  todos: [
    { todoText: "Купить яблоки", completed: false, id: 1 },
    { todoText: "Купить груши", completed: false, id: 2 },
    { todoText: "Купить арбузы", completed: false, id: 3 },
    { todoText: "Купить молоко", completed: false, id: 4, },
    { todoText: "Устроиться на работу", completed: false, id: 5 },
    { todoText: "Создать приложение список дел", completed: true, id: 6},
  ],
  addNewTodo: false,
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "window/open/close":
      return {
        ...state,
        addNewTodo: !state.addNewTodo,
      };
    case "add/new/todo":
      return {
        ...state,
        todos: [{todoText: action.payload, completed: false, id: action.id}, ...state.todos]
      };
    case "delete/todo":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.todoText !== action.delete)
      };

    default:
      return state;
  }
};
