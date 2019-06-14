import React, { createContext } from 'react'
import InitialTodos from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: "Mow the lawn", completed: false },
    { id: 2, task: "Release lady bugs into the garden", completed: false }
]

export const TodosContext = createContext();

export function TodosProvider(props) {
        
    const todoStuff  = InitialTodos(defaultTodos);

    return (
        <TodosContext.Provider value={todoStuff}>
            { props.children }
        </TodosContext.Provider>
    );
};