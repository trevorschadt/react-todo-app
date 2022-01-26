import React from 'react';
import TodosList from './TodosList';
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from 'uuid';
import './TodoContainer.css';


class TodoContainer extends React.Component {
    state = { todos: [] };
    addItem = title => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    completeItem = (id) => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
            }
        });
    }
    deleteItem = id => {
        this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }
        )
    }
    renameItem = (updatedTitle, id) => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => todo.id === id ? {...todo, title: updatedTitle} : todo)
            }
        });
    }

    componentDidMount() {
        const temp = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(temp);
        if (loadedTodos) {
            this.setState({todos: loadedTodos});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos);
            localStorage.setItem('todos', temp);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo addTodoProps={this.addItem}/>
                    <TodosList
                        todos={this.state.todos}
                        handleChangeProps={this.completeItem}
                        handleDeleteProps={this.deleteItem}
                        handleRenameProps={this.renameItem}
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer;