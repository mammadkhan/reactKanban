import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import { useDispatch, useSelector } from "react-redux";
import { reorder } from "../state/board";

import "../styles/Board.css";
import Column from "./Column";

import { ReactComponent as Add } from "../assets/add.svg";
import { toggleAddNewColumnModal, editBoardModal } from "../state/ui";

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const ui = useSelector((state) => state.ui);

  const handleNewColumn = () => {
    dispatch(toggleAddNewColumnModal());
    dispatch(editBoardModal(board.data[board.selected].id));
  };

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    if (
      e.destination.droppableId === e.source.droppableId &&
      e.destination.index === e.source.index
    )
      return;
    dispatch(reorder(e));
  };

  return (
    <DragDropContext onDragEnd={(e) => handleDragEnd(e)}>
      <main className={"board" + (ui.sideMenuOpen ? "" : " board_wide")}>
        {board.data[board.selected].columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        {board.data[board.selected].columns.length < 5 && (
          <button className="new_column" onClick={() => handleNewColumn()}>
            <Add
              style={{
                width: "2.5rem",
                height: "2.5rem",
                fill: "var(--color-gray)",
              }}
            />
            New Column
          </button>
        )}
      </main>
    </DragDropContext>
  );
};

export default Board;
