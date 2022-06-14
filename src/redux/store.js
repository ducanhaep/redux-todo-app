// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filterSlice";
import todosSlice from "../components/TodoList/todoSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    todoList: todosSlice.reducer,
  },
});
export default store;
