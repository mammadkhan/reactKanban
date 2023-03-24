import React, { useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import { useDispatch, useSelector } from "react-redux";
import { reorder } from "../state/board";

import "../styles/Board.css";
import Column from "./Column";

import { ReactComponent as Add } from "../assets/add.svg";

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const ui = useSelector((state) => state.ui);

  return (
    <DragDropContext
      onDragEnd={(e) => {
        dispatch(reorder(e));
      }}
    >
      <main className={"board" + (ui.sideMenuOpen ? "" : " board_wide")}>
        {board.data[board.selected].columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        <button className="new_column">
          <Add
            style={{
              width: "2.5rem",
              height: "2.5rem",
              fill: "var(--color-gray)",
            }}
          />
          New Column
        </button>
      </main>
    </DragDropContext>
  );
};

export default Board;
