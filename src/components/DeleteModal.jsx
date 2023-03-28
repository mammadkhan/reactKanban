import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBoard, deleteTask } from "../state/board";
import { deleteTaskModal, taskModal, deleteBoardModal } from "../state/ui";
import "../styles/DeleteModal.css";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const board = useSelector((state) => state.board);

  const [deletedTitle, setDeletedTitle] = useState("");

  useEffect(() => {
    if (ui.deleteBoardModal) {
      setDeletedTitle(board.data[board.selected].title);
    } else {
      setDeletedTitle(
        board.data[board.selected].columns
          .find((column) => column.tasks.some((task) => task.id === ui.deleteTaskModal))
          .tasks.find((task) => task.id === ui.deleteTaskModal).title
      );
    }
  }, []);

  const handleTaskDelete = (taskId) => {
    dispatch(deleteTaskModal(null));
    dispatch(deleteTask(taskId));
  };

  const handleTaskCancel = (taskId) => {
    dispatch(deleteTaskModal(null));
    dispatch(taskModal(taskId));
  };

  const handleBoardDelete = (boardId) => {
    dispatch(deleteBoardModal(null));
    dispatch(deleteBoard(boardId));
  };
  const handleBoardCancel = () => {
    dispatch(deleteBoardModal(null));
  };

  return (
    <div
      className="delete_task_modal_container"
      onClick={() => {
        ui.deleteBoardModal
          ? handleBoardCancel(ui.deleteBoardModal)
          : handleCancel(ui.deleteTaskModal);
      }}
    >
      <div className="delete_task_modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="delete_task_modal_title">Delete this task?</h3>
        <p className="delete_task_modal_text">
          Are you sure you want to delete the '{deletedTitle}'{" "}
          {ui.deleteBoardModal ? "board" : "task"}? This action will remove{" "}
          {ui.deleteBoardModal ? "all columns and tasks " : "task and all subtasks "}
          and cannot be reversed.
        </p>
        <div className="delete_task_modal_buttons_container">
          <button
            id="delete_button"
            onClick={() => {
              ui.deleteBoardModal
                ? handleBoardDelete(ui.deleteBoardModal)
                : handleTaskDelete(ui.deleteTaskModal);
            }}
          >
            Delete
          </button>
          <button
            id="cancel_button"
            onClick={() => {
              ui.deleteBoardModal ? handleBoardCancel() : handleTaskCancel(ui.deleteTaskModal);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
