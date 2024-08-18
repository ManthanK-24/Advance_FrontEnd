import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:" Todo msg",
            completed: false,

        }
    ],
    addTodo: (todo)=>{},  // Functionality will be implemented where context will be used
    updateTodo: (id,todo) => {},
    deletTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {

    return useContext(TodoContext)  // It will return the context of Todo
}

export const TodoProvider = TodoContext.Provider  // because we don't want to write this everytime