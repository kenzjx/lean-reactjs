
// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },


// }

// const filtersReducer = (state = initState, action) =>{
//     /*
//     {
//         type: 'todoList/addTodo',
//         payload: {id: 3, name: 'Learn Java', completed: false, priority: 'Low'}
//     }
//     */
//    switch(action.type) {

//         case 'filters/searchFilterChange':
//             return {

//                 filters: {
//                 ...state,
//                 search: action.payload
//                 }

//             }
//         case 'filter/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filter/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//    }
// };

// export default filtersReducer;


import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilterChange: (state, action) =>{
            // matation
            state.search = action.payload

        },

        statusFilterChange: (state, action) =>{
            state.status = action.payload
        },

        priorityFilterChange: (state, action) =>{
            state.priority = action.payload
        }
    }
});