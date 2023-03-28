import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAddNewTaskModal,
  deleteBoardModal,
  editBoardModal,
  toggleMobileSideMenu,
  toggleMoreMenu,
} from "../state/ui";
import "../styles/Header.css";

import { ReactComponent as LogoDesktop } from "../assets/logo-desktop.svg";
import { ReactComponent as LogoDesktopDark } from "../assets/logo-desktop-dark.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Down } from "../assets/down.svg";

const Header = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const ui = useSelector((state) => state.ui);

  const handleEdit = (boardId) => {
    dispatch(editBoardModal(boardId));
    dispatch(toggleMoreMenu());
  };

  const handleDelete = (boardId) => {
    dispatch(deleteBoardModal(boardId));
    dispatch(toggleMoreMenu());
  };

  return (
    <header className="header">
      <a href="/">
        {ui.theme === "dark" ? (
          <LogoDesktop className="header_logo" />
        ) : (
          <LogoDesktopDark className="header_logo" />
        )}
      </a>
      <div className="header_right">
        <h1 className="board_title">{board.data[board.selected].title}</h1>
        <button className="mobile_board_selector" onClick={() => dispatch(toggleMobileSideMenu())}>
          <span className="mobile_board_selector_title">{board.data[board.selected].title}</span>
          <Down />
        </button>
        <div className="header_right_right">
          <button className="add_new_task" onClick={() => dispatch(toggleAddNewTaskModal())}>
            <Add className="add_new_task_svg" />
            <span className="add_new_task_text">Add New Task</span>
          </button>
          <button className="more" onClick={() => dispatch(toggleMoreMenu())}>
            <More style={{ transform: "scale(1.4)", fill: "var(--color-gray)" }} />
          </button>
        </div>
      </div>
      {ui.moreMenu && (
        <div className="header_submenu">
          <button
            className="submenu_button"
            onClick={() => handleEdit(board.data[board.selected].id)}
          >
            Edit board
          </button>
          <button
            id="submenu_delete"
            className="submenu_button"
            onClick={() => handleDelete(board.data[board.selected].id)}
          >
            Delete board
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
