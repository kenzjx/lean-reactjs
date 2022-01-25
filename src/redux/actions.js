
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (data) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: data
    }
}


export const searchFilterChange = (text) =>{
    return {
        type:'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) =>{
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) =>{
    return {
        type: 'filter/priorityFilterChange',
        payload: priorities
    }
}
//action creators => function