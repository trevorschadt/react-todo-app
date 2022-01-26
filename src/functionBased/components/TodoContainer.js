import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodoContainer = () => {
    function getInitialTodos() {
        const temp = localStorage.getItem('todos');
        const savedState = JSON.parse(temp);
        return savedState || {todos: []};
    }

    const [state, setState] = useState(getInitialTodos());

    useEffect(() => {
        console.log("test run")
        const temp = localStorage.getItem('todos');
        const loadedState = JSON.parse(temp);
        if (loadedState.todos) setState(loadedState);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])

    const addItem = title => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        };
        setState(prevState => ({...prevState, todos: [...prevState.todos, newTodo]}));
    }
    const completeItem = (id) => {
        setState(prevState => ({
            ...prevState,
            todos: prevState.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        }));
    }
    const deleteItem = id => {
        setState(prevState => ({...prevState, todos: [...prevState.todos.filter(todo => todo.id !== id)]}));
    }
    const renameItem = (updatedTitle, id) => {
        setState(prevState => ({
            ...prevState,
            todos: prevState.todos.map(todo => todo.id === id ? {...todo, title: updatedTitle} : todo)
        }));
    }

    return (
        <div className="container">
            <div className="inner">
                <Header/>
                <InputTodo addTodoProps={addItem}/>
                <TodosList
                    todos={state.todos}
                    handleChangeProps={completeItem}
                    handleDeleteProps={deleteItem}
                    handleRenameProps={renameItem}
                />
            </div>
        </div>
    );

}
export default TodoContainer;