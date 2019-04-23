import React from "react";
import { Link } from "react-router-dom";

const CalendarTile = props => {
  return (
    <div className="calendar-tile">
      <div>{props.date}</div>
      <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {props.event.map(item => (
          <div>
            <Link
              to={{ pathname: `/${item.type}/${item.name}`, state: { item } }}
              key={item.id}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTile;
