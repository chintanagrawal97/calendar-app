import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarTile from "./CalendarTile";
const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const mapToDate = (todos, reminder) => {
  const hashObj = [];
  for (let i = 0; i < todos.length; ++i) {
    const { date } = todos[i];
    if (hashObj[date] !== undefined) {
      hashObj[date].push({ ...todos[i], type: "todo" });
    } else {
      hashObj[date] = [{ ...todos[i], type: "todo" }];
    }
  }
  for (let i = 0; i < reminder.length; ++i) {
    const { date } = reminder[i];
    if (hashObj[date] !== undefined) {
      hashObj[date].push({ ...reminder[i], type: "reminder" });
    } else {
      hashObj[date] = [{ ...reminder[i], type: "reminder" }];
    }
  }
  return hashObj;
};

class Calendar extends Component {
  calendarHeader = () =>
    dayName.map(name => (
      <div>
        <b>{name}</b>
      </div>
    ));
  day = () => {
    const { todos, reminder } = this.props;
    const dayEvents = mapToDate(todos, reminder);
    const dayArr = [];
    for (let i = 1; i < 32; ++i) {
      const DayTile = (
        <CalendarTile key={i} date={i} event={dayEvents[i] || []} />
      );
      dayArr.push(DayTile);
    }
    return dayArr;
  };
  render() {
    return (
      <div className="calendar-container">
        <header className="calendar-header">{this.calendarHeader()}</header>
        <div className="week">{this.day()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  reminder: state.reminder
});

export default connect(mapStateToProps)(Calendar);
