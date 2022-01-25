// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnchancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnchancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/todoListSlice";



const store = configureStore({
    reducer: {
        filters: filtersReducer,
    todoList: todoListReducer
    }
});

export default  store;