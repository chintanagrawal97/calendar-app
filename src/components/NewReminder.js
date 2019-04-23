import React, { Component } from "react";
import { Input, Card, Button, message } from "antd";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { addReminder, editReminder, deleteReminder } from "../actions";

const { TextArea } = Input;

class NewReminder extends Component {
  constructor(props) {
    super(props);
    const { event } = props;
    let state = {
      name: "",
      date: 1,
      description: ""
    };
    if (event) {
      state = {
        name: event.name,
        date: event.date,
        description: event.description
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

  saveReminder = () => {
    const { name, date, description } = this.state;
    const data = {
      name,
      date,
      description
    };
    this.props.addReminder(data);
    message.success("Reminder Added");
  };

  updateReminder = () => {
    const { name, date, description } = this.state;
    const data = {
      name,
      date,
      description,
      id: this.props.event.id
    };
    this.props.editReminder(data);
    message.success("Reminder Updated");
  };

  handleDelete = () => {
    const data = { id: this.props.event.id };
    this.props.deleteReminder(data);
    message.success("Todo Deleted");
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { update } = this.props;
    const SubmitButton = update ? (
      <Button type="primary" onClick={this.updateReminder}>
        Update Reminder
      </Button>
    ) : (
      <Button type="primary" onClick={this.saveReminder}>
        Save Reminder
      </Button>
    );
    return (
      <div className="reminder">
        <Card title="Create Reminder" style={{ width: 300 }}>
          <div className="items">
            <label>Event Name</label>
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
          <div className="items">
            <label>Description</label>
            <TextArea
              rows={4}
              onChange={e =>
                this.handleInputChange("description", e.target.value)
              }
              value={this.state.description}
            />
          </div>
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

const mapStateToProps = state => ({
  reminder: state.reminder
});

export default connect(
  mapStateToProps,
  { addReminder, editReminder, deleteReminder }
)(NewReminder);
