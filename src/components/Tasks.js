import React from "react";
import "../Styles/styleT.css";

export const Task = (props) => {
  return (
    <div>
      <div
        className="task"
        style={{ backgroundColor: props.completed ? "green" : "lightpink" }}
      >
        <h1>{props.taskName}</h1>
        <div>
          <button className="btn" onClick={() => props.deleteTask(props.id)}>
            x
          </button>
          <button className="btn" onClick={() => props.completeTask(props.id)}>
            v
          </button>
        </div>
      </div>
    </div>
  );
};
