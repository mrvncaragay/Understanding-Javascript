import { useState } from 'react';
import  uuidv4 from 'uuid/v4';

const InitialTodos = (initialTodos) => {
    const [todos, setTodos] = useState(initialTodos);

    return {

        todos: todos,

        addTodo: todo => setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]),

        removeTodo: id => {
            //filter out remove todo
            //call set todos with new todos array
        
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos([...updatedTodos]);
        },

        toggleTodo: id => {

            const updatedTodos = todos.map(todo =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                );
            setTodos([...updatedTodos]);    
        },

        editTodo: (id, newTask) => {

            const updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, task: newTask } : todo
            );
            setTodos([...updatedTodos]);        
        }
    }   
}


export default InitialTodos;