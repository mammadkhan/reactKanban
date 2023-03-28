import React from "react";
import { Droppable } from "@hello-pangea/dnd";

import "../styles/Column.css";

import Task from "../components/Task";

const Column = ({ column }) => {
  return (
    <div className="column_container">
      <h2 className="column_title">
        <span className="title_dot" style={{ backgroundColor: column.color }}></span>
        <span className="column_title_text" title={column.title}>
          {column.title}
        </span>{" "}
        &#40; {column.tasks.length} &#41;
      </h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className={column.tasks.length > 0 ? "column" : "empty_column"}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
