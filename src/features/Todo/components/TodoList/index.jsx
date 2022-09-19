import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import classnames from 'classnames';
import React from 'react';
import './style.scss';
function TodoList({ todoList, onCompleted, onDelete, onEdit }) {
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li key={todo.id} >
                    <span className={classnames({ completed: todo.status === "completed" })}>{todo.title}</span>
                    <div className="action">
                        <DeleteForeverIcon onClick={() => onDelete(todo.id)} />
                        <CheckIcon onClick={() => onCompleted(todo.id)} />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList