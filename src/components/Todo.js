import React, { Component } from "react";
import { Input, Card, Button, Divider, message } from "antd";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../actions";
import TodoItems from "./TodoItems";

class Todo extends Component {
  constructor(props) {
    super(props);
    const { event } = this.props;
    let state = {
      name: "",
      date: 1,
      todoInput: "",
      todoList: [],
      save: false
    };
    if (event) {
      state = {
        name: event.name,
        date: event.date,
        todoInput: "",
        todoList: event.todoList
      };
    }
    this.state = {
      ...state
    };
  }

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  handleInputChange = (key, value) => {
    this.updateState(key, value);
  };

  addTodo = () => {
    const { todoList, todoInput } = this.state;
    const id = Math.ceil(
      Math.random() * 10000000000000000000000000000000000000
    );
    todoList.push({ text: todoInput, completed: false, id });
    this.updateState("todoList", todoList);
  };

  saveTodo = () => {
    const { name, date, todoList } = this.state;
    const data = {
      name: name === "" ? "No Name" : name,
      date,
      todoList
    };
    this.props.addTodo(data);
    message.success("Todo Added");
  };

  updateTodo = () => {
    const { name, date, todoList } = this.state;
    const data = {
      name: name === "" ? "No Name" : name,
      date,
      todoList,
      id: this.props.event.id
    };
    this.props.editTodo(data);
    message.success("Todo updated");
  };

  handleDelete = () => {
    const data = {
      id: this.props.event.id
    };
    this.props.deleteTodo(data);
    message.success("Todo Deleted");
    this.setState({ redirect: true });
  };

  deleteTodoItem = id => {
    const todoList = this.state.todoList.filter(item => item.id !== id);
    this.updateState("todoList", todoList);
  };

  todoItemCompleted = (id, value) => {
    const todoList = this.state.todoList.map(item => {
      if (item.id === id) {
        item.completed = value;
      }
      return item;
    });
    this.updateState("todoList", todoList);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const { update } = this.props;
    const SubmitButton = update ? (
      <Button type="primary" onClick={this.updateTodo}>
        Update Todo
      </Button>
    ) : (
      <Button type="primary" onClick={this.saveTodo}>
        Save Todo
      </Button>
    );
    return (
      <div className="todo">
        <Card title="Create Todo" style={{ width: 300 }}>
          <div className="items">
            <label>Name</label>
            <Input
              onChange={e => this.handleInputChange("name", e.target.value)}
              value={this.state.name}
            />
          </div>
          <div className="items">
            <label>Date </label>
            <Input
              type="Number"
              min={1}
              max={31}
              onChange={e => this.handleInputChange("date", e.target.value)}
              value={this.state.date}
            />
          </div>
          <Divider />
          <div className="items">
            <label>Add Todo's</label>
            <Input
              onChange={e =>
                this.handleInputChange("todoInput", e.target.value)
              }
              value={this.state.todoInput}
            />
            <Button
              onClick={this.addTodo}
              style={{
                backgroundColor: "#13CE66",
                color: "white",
                marginTop: "2%"
              }}
            >
              Add
            </Button>
          </div>
          {this.state.todoList.map(item => (
            <TodoItems
              complete={value => this.todoItemCompleted(item.id, value)}
              delete={() => this.deleteTodoItem(item.id)}
              key={item.id}
              item={item}
            />
          ))}
          <Divider />
          <div className="items">{SubmitButton}</div>
          <div className="items">
            {update && (
              <Button
                onClick={this.handleDelete}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, editTodo, deleteTodo }
)(Todo);
