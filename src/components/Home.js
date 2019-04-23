import React, { Component } from "react";
import { Alert } from "antd";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import plusIcon from "../plus.svg";
import todoIcon from "../edit.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="cell11">
          <h1>Calendar</h1>
        </div>
        <div className="cell22">
          <Calendar />
        </div>
        <div className="icon-container">
          <Alert
            message="Informational Notes"
            description="This App is for demo purpose, So Number are used to depict Calendar. "
            type="info"
            showIcon
            style={{ marginRight: "2%" }}
          />
          <div className="icon">
            <Link to="/reminder/create">
              <img src={plusIcon} alt="plus" title="Create Reminder" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/todo/create">
              <img src={todoIcon} alt="plus" title="Create Todo" />
            </Link>
          </div>
        </div>
        <div />
      </div>
    );
  }
}
