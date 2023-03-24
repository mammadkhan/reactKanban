import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../state/board";
import { deleteTaskModal, toggleTaskModal } from "../state/ui";
import "../styles/DeleteTaskModal.css";

const DeleteTaskModal = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const board = useSelector((state) => state.board);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
    dispatch(deleteTaskModal(null));
  };

  const handleCancel = (taskId) => {
    dispatch(toggleTaskModal(taskId));
    dispatch(deleteTaskModal(null));
  };
  return (
    <div
      className="delete_task_modal_container"
      onClick={() => handleCancel(ui.deleteTaskModal)}
    >
      <div className="delete_task_modal" onClick={(e) => e.preventDefault()}>
        <h3 className="delete_task_modal_title">Delete this task?</h3>
        <p className="delete_task_modal_text">
          Are you sure you want to delete the 'Build UI for onboarding flow'
          board? This action will remove all columns and tasks and cannot be
          reversed.
        </p>
        <div className="delete_task_modal_buttons_container">
          <button
            id="delete_button"
            onClick={() => {
              handleDelete(ui.deleteTaskModal);
            }}
          >
            Delete
          </button>
          <button
            id="cancel_button"
            onClick={() => handleCancel(ui.deleteTaskModal)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
