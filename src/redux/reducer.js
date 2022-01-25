import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/todoListSlice";
import { combineReducers } from "redux";


// const rootReducer = (state= {}, action) =>{
//     /*
//     {
//         type: 'todoList/addTodo',
//         payload: {id: 3, name: 'Learn Java', completed: false, priority: 'Low'}
//     }
//     */
//    return {
//        filters: filtersReducer(state.filters, action),
//        todoList: todoListReducer(state.todoList, action)
       
//    }
 
// };
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;