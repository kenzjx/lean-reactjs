// const initState = {
//   todoList: [
//     { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//     { id: 3, name: "Learn Java", completed: false, priority: "Low" },
//   ],
// };

// const todoListReducer = (state = initState, action) => {
//   /*
//     {
//         type: 'todoList/addTodo',
//         payload: {id: 3, name: 'Learn Java', completed: false, priority: 'Low'}
//     }
//     */
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         todoList: [...state, action.payload],
//       };

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, priority: "High" },
        { id: 3, name: "Learn Java", completed: false, priority: "Low" },
    ],
    reducers: {
        addTodo: (state, action) =>{
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) =>{
            const currentTodo = state.find(todo=> todo.id === action.id)
            if(currentTodo)  currentTodo.completed = !currentTodo.completed;
           
        }
    }
});