const initialState = {
  user: {
    name: "",
    age: "",
    gender: "",
  },
};

const todosReducer = (state = initialState, action) => {
  if (action.type == "ADD_TODO") {
    return { ...state.user, user: [state.user.name, action.payload] };
  }
  // if (action.type == "REMOVE_TODO") {
  //   return state;
  // }
  // if (action.type == "SET_TODO") {
  //   return { ...state, todos: action.payload };
  // }
  return state;
};

export const addTodo = (payload) => ({ type: "ADD_TODO", payload });
// export const deleteTodo = (payload) => ({ type: "ADD_TODO" });

export default todosReducer;
