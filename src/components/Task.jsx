import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskModal } from "../state/ui";
import { Draggable } from "@hello-pangea/dnd";

import { toggleMoreMenu } from "../state/ui";

import "../styles/Task.css";

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  const handleEdit = () => {
    if (ui.moreMenu) {
      dispatch(toggleMoreMenu());
    }
    dispatch(taskModal(task.id));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task"
          onClick={() => handleEdit()}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h3 className="task_title">{task.title}</h3>
          <p className="subtask_status">
            {task.subtasks.filter((task) => task.done).length} of {task.subtasks.length} subtasks
          </p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
