import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, toggleSubtask } from "../state/board";
import { toggleTaskModal, taskEdit, deleteTaskModal } from "../state/ui";

import "../styles/TaskModal.css";

import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Down } from "../assets/down.svg";

const TaskModal = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const ui = useSelector((state) => state.ui);

  const [submenu, setSubmenu] = useState(false);

  const [columnInfo, setColumnInfo] = useState({
    id: "",
    title: "",
  });
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    subtasks: [],
  });

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTask(
      board.data[board.selected].columns
        .find((column) => {
          setColumnInfo({ id: column.id, title: column.title });
          return column.tasks.some((task) => task.id === ui.taskModal.taskId);
        })
        .tasks.find((task) => task.id === ui.taskModal.taskId)
    );
  }, [isOpen, board]);

  const handleEdit = (taskId) => {
    dispatch(taskEdit(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(toggleTaskModal(null));
    dispatch(deleteTaskModal(task.id));
  };

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleSubtaskToggle = (subtaskId, taskId, columnId) => {
    dispatch(toggleSubtask({ subtaskId, taskId, columnId }));
  };

  const handleStatusChange = (taskId, sourceId, destinationId) => {
    if (sourceId === destinationId) {
      setOpen(false);
      return;
    }
    dispatch(setStatus({ taskId, sourceId, destinationId }));
    setOpen(false);
  };

  return (
    <div className="task_modal_container" onClick={() => dispatch(toggleTaskModal(null))}>
      <div
        className="task_modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="task_modal_top">
          <h3 className="task_modal_title">{task.title}</h3>
          <button className="top_edit_button" onClick={() => setSubmenu(!submenu)}>
            <More />
          </button>
          {submenu && (
            <div className="top_edit_submenu">
              <button className="submenu_button" onClick={() => handleEdit(task.id)}>
                Edit task
              </button>
              <button
                id="submenu_delete"
                className="submenu_button"
                onClick={() => handleDelete(task.id)}
              >
                Delete task
              </button>
            </div>
          )}
        </div>
        <p className="task_modal_description">{task.description}</p>
        <div className="task_modal_subtasks">
          <h3 className="subtasks_title">
            {`Subtasks (${task.subtasks.filter((subtask) => subtask.done === true).length} of ${
              task.subtasks.length
            })`}
          </h3>
          <div className="task_subtasks_container">
            {task.subtasks.map((subtask) => (
              <label
                key={subtask.id}
                className={"subtask_container" + (subtask.done ? " subtask_done" : "")}
              >
                <input
                  type="checkbox"
                  checked={subtask.done}
                  onChange={() => handleSubtaskToggle(subtask.id, task.id, columnInfo.id)}
                />
                <p>{subtask.title}</p>
              </label>
            ))}
          </div>
        </div>
        <div className="status_container">
          <p className="status_title">Status</p>
          <button type="button" className="status_dropdown" onClick={() => handleDropDown()}>
            {columnInfo.title}
            <Down style={{ width: "20px", height: "20px" }} />
          </button>
          {isOpen && (
            <div className="status_dropdown_container">
              {board.data[board.selected].columns.map((column, index) => (
                <button
                  key={column.id}
                  type="button"
                  className="status_dropdown_container_button"
                  onClick={() => handleStatusChange(task.id, columnInfo.id, column.id)}
                >
                  {column.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
