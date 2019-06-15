import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todoReducers'

const defaultTodos = [
    { id: 1, task: "Mow the lawn", completed: false },
    { id: 2, task: "Release lady bugs into the garden", completed: false }
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
        
    //const todoStuff  = InitialTodos(defaultTodos);

    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                { props.children }
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
};