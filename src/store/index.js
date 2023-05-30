import { legacy_createStore as createStore } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
const store = createStore(todosReducer);

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION__()
