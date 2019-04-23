import React from "react";
import { Checkbox, Card, Button } from "antd";

export default props => {
  return (
    <Card className="todo-items">
      <Checkbox
        checked={props.item.completed}
        onChange={e => props.complete(e.target.checked)}
      >
        {props.item.text}
      </Checkbox>
      <Button
        onClick={props.delete}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Remove
      </Button>
    </Card>
  );
};
