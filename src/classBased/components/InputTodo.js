import React, { Component } from "react";

class InputTodo extends Component {
    state= {
        title: ""
    }
    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.title.trim()) {
            alert("Please enter a valid item");
            return;
        }
        this.props.addTodoProps(this.state.title);
        this.setState({ title: "" });
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange} />
                <button className="input-submit">Submit</button>
            </form>
        );
    }
}

export default InputTodo;