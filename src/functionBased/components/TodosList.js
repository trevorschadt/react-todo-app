import React from 'react';
import TodoItem from "./TodoItem";

const TodosList = props => (
    <ul>
        {props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={props.handleChangeProps}
                handleDeleteProps={props.handleDeleteProps}
                handleRenameProps={props.handleRenameProps}
            />
        ))}
    </ul>
);

export default TodosList;