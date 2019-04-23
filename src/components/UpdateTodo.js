import React, { Component } from "react";
import Todo from "./Todo";

class UpdateTodo extends Component {
  render() {
    return <Todo event={this.props.location.state.item} update={true} />;
  }
}

export default UpdateTodo;
