import React, { Component } from "react";
import NewReminder from "./NewReminder";

class UpdateReminder extends Component {
  render() {
    return <NewReminder event={this.props.location.state.item} update={true} />;
  }
}

export default UpdateReminder;
