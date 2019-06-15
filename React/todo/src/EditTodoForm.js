
import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/TestContexts';

function EditTodoForm({ id, task, toggleEdit }) {

    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task)

    return (

        <form onSubmit={ e => {
            e.preventDefault();
            dispatch({ type: "EDIT", id: id, newTask: value });
            reset();
            toggleEdit();
        }}
        style={{marginLeft: "1rem", width: "50%"}}
        >

        
            <TextField 
            value={ value } 
            onChange={ handleChange } 
            margin="normal" 
            fullWidth 
            autoFocus />
        </form>

    )
}

export default EditTodoForm;