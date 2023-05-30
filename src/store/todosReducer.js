const initialState = {
  user: {
    name: "",
    age: "",
    gender: "",
  },
};

const todosReducer = (state = initialState.user, action) => {
  if (action.type == "ADD_TODO") {
    return {
      ...state,
      name: [...state.name, action.payload],
      age: [...state.age, action.payload],
      gender: [...state.gender, action.payload],
    };
  }
  return state;
};

export const addTodo = (payload) => ({ type: "ADD_TODO", payload });

export default todosReducer;
