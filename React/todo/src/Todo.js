import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './contexts/TestContexts';


function Todo({ id, task, completed }) {

    const { removeTodo, toggleTodo } = useContext(TodosContext);
    const [isEditing, toggle] = useToggleState(false);

    return (
        <ListItem style={{height: "64px"}} key={id}>
            { isEditing ? (

            <EditTodoForm id={id} task={task} toggleEdit={toggle}/> 
            
            )  : 
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                        <ListItemSecondaryAction>
                            <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>

                            <IconButton aria-label="edit" onClick={ toggle }>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItemText>
                </> 
            }
        </ListItem>
    )
}

export default Todo;