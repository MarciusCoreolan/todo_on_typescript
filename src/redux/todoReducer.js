const initialState = {
  todos: [
    { todoText: "Купить яблоки", completed: false },
    { todoText: "Купить груши", completed: false },
    { todoText: "Купить арбузы", completed: false },
    { todoText: "Купить молоко", completed: false },
  ],
  todosLoading: false,
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
        todos: [{todoText: action.payload, completed: false}, ...state.todos]
      };

    default:
      return state;
  }
};
