import React, {useEffect, useState} from 'react';
import styles from './TodoItem.module.css';
import {FaTrash} from "react-icons/fa";

const TodoItem = props => {
    const {completed, id, title} = props.todo;
    const [state, setState] = useState({editing: false})

    useEffect(() => () => console.log('Cleaning up...'), [])

    const handleEditing = () => {
        setState({editing: true});
    };

    const handleUpdatedDone = e => {
        if (e.key === 'Enter') {
            setState({editing: false});
        }
    };

    const viewMode = {}
    const editMode = {}
    if (state.editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through'
    };
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button className={styles.delete} onClick={() => props.handleDeleteProps(id)}><FaTrash /></button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input
                type="text"
                className={styles.textInput}
                style={editMode}
                value={title}
                onChange={e => {
                    props.handleRenameProps(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )

}

export default TodoItem;