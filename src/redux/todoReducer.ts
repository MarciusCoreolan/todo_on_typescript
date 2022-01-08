import {actionCreatorType, ActionTypes, IState} from "../types/types";

const initialState: IState = {
  todos: [
    { todoText: "Купить яблоки", completed: false, id: '1' },
    { todoText: "Купить груши", completed: true, id: '2' },
    { todoText: "Купить арбузы", completed: false, id: '3' },
    { todoText: "Купить молоко", completed: false, id: '4' },
    { todoText: "Устроиться на работу", completed: false, id: '5' },
    { todoText: "Создать приложение список дел", completed: true, id: '6' },
  ],
  addNewTodo: false,
  searchTodo: "",
};

export const todoReducer = (state = initialState, action: actionCreatorType): IState => {
  switch (action.type) {
    case ActionTypes.WINDOW_OPEN_CLOSE:
      return {
        ...state,
        addNewTodo: !state.addNewTodo,
      };
    case ActionTypes.ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          {
            todoText: action.payload.todo,
            completed: false,
            id: action.payload.id,
          },
          ...state.todos,
        ],
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ActionTypes.SEARCH_TODO:
      return {
        ...state,
        searchTodo: action.payload,
      };
    case ActionTypes.COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
