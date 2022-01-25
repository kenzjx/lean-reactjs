import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;

export const todoListSelector = (state) => state.todoList;

export const filterStatusSelector = (state) => state.filters.status;

export const filterPrioritiesSelector = (state) => state.filters.priority;

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo)=>{
//         return todo.name.includes(searchTextSelector(state));
//     });


//    return todosRemaining;

// }

export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, searchTextSelector, filterPrioritiesSelector, (todoList, status, searchText, priorities) => {
    return todoList.filters((todo) => {
        if (status = 'All'){
            return priorities.length ? todo.name.includes(searchText): todo.name.includes(searchText);

        }
        return todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed  );

    })
});


