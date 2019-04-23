import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import NewReminder from "./components/NewReminder";
import UpdateReminder from "./components/UpdateReminder";
import UpdateTodo from "./components/UpdateTodo";
import Todo from "./components/Todo";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reminder/create" component={NewReminder} />
            <Route exact path="/reminder/:name" component={UpdateReminder} />
            <Route exact path="/todo/create" component={Todo} />
            <Route exact path="/todo/:name" component={UpdateTodo} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
