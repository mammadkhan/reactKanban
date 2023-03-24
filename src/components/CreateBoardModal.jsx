import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../styles/CreateNewBoardModal.css";

import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { toggleAddNewBoardModal } from "../state/ui";
import { addNewBoard } from "../state/board";

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const CreateBoardModal = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);

  const [newBoard, setNewBoard] = useState({
    id: uuidv4(),
    title: "",
    columns: [
      {
        id: uuidv4(),
        title: "",
        color: randomHexColor(),
        tasks: [],
        status: "",
      },
    ],
  });

  const [error, setError] = useState({
    title: "",
    columns: [""],
  });

  useEffect(() => {
    console.log(`NewBoard: ${JSON.stringify(newBoard, null, 2)}`);
    console.log(`Error: ${JSON.stringify(error, null, 2)}`);
  }, [newBoard, error]);

  const handleTitleChange = (e) => {
    setError((prev) => ({
      title: "",
      columns: prev.columns.map((column) => (column = "")),
    }));
    setNewBoard((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleColumnChange = (index, e) => {
    setError((prev) => ({
      title: "",
      columns: prev.columns.map((column) => (column = "")),
    }));
    setNewBoard((prev) => ({
      ...prev,
      columns: prev.columns.map((column, i) =>
        i === index ? { ...column, title: e.target.value } : column
      ),
    }));
  };

  const handleNewColumn = () => {
    if (newBoard.columns.length > 4) return;
    setNewBoard((prev) => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          id: uuidv4(),
          title: "",
          color: randomHexColor(),
          tasks: [],
          status: "",
        },
      ],
    }));
    setError((prev) => ({
      ...prev,
      columns: [...prev.columns, ""],
    }));
  };

  const handleColumnDelete = (index) => {
    setNewBoard((prev) => ({
      ...prev,
      columns: prev.columns.filter((column, i) => i !== index),
    }));
    setError((prev) => ({
      ...prev,
      columns: prev.columns.filter((column, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newBoard.title.trim() === "" &&
      newBoard.columns.some((column) => column.title.trim() === "")
    ) {
      const newColumnsError = [...error.columns].map((column, index) => {
        if (newBoard.columns[index].title.trim() === "") {
          return "Required";
        }
      });
      setError({
        title: "Required",
        columns: newColumnsError,
      });
    } else if (newBoard.title.trim() === "") {
      setError((prev) => ({
        ...prev,
        title: "Required",
      }));
    } else if (
      newBoard.columns.some((column) => column.title.trim() === "") &&
      !board.data.some((board) => board.title === newBoard.title)
    ) {
      const newColumnsError = [...error.columns].map((column, index) => {
        if (newBoard.columns[index].title.trim() === "") {
          return "Required";
        }
      });
      setError((prev) => ({
        ...prev,
        columns: newColumnsError,
      }));
    } else {
      if (
        board.data.some((board) => board.title === newBoard.title) &&
        newBoard.columns.some((column) => column.title.trim() === "")
      ) {
        const newColumnsError = [...error.columns].map((column, index) => {
          if (newBoard.columns[index].title.trim() === "") {
            return "Required";
          }
        });
        setError({
          title: "Used",
          columns: newColumnsError,
        });
      } else if (board.data.some((board) => board.title === newBoard.title)) {
        setError((prev) => ({
          ...prev,
          title: "Used",
        }));
      } else {
        dispatch(addNewBoard(newBoard));
        dispatch(toggleAddNewBoardModal());
      }
    }
  };

  return (
    <div className="cbm_container" onClick={() => dispatch(toggleAddNewBoardModal())}>
      <form className="cbm" onClick={(e) => e.stopPropagation()}>
        <h3 className="cbm_title">Add New Board</h3>
        <div className="cbm_section_container">
          <p className="cbm_subtitle">Name</p>
          <input
            className={"cbm_input" + (error.title ? " cbm_input_warning" : "")}
            type="text"
            value={newBoard.title}
            onChange={(e) => handleTitleChange(e)}
            maxLength={30}
          />
          {error.title && <p className="cbm_error cbm_title_error">{error.title}</p>}
        </div>
        <div className="cbm_section_container">
          <p className="cbm_subtitle">Columns</p>
          <div className="cbm_columns">
            {newBoard.columns.map((column, index) => (
              <div key={index} className="cbm_input_container">
                <input
                  className={"cbm_input" + (error.columns[index] ? " cbm_input_warning" : "")}
                  type="text"
                  value={column.title}
                  onChange={(e) => handleColumnChange(index, e)}
                  maxLength={30}
                />
                {error.columns[index] && (
                  <p
                    className="cbm_error cbm_column_error"
                    style={newBoard.columns.length > 1 ? { right: "3.4rem" } : {}}
                  >
                    {error.columns[index]}
                  </p>
                )}

                {newBoard.columns.length > 1 && (
                  <button
                    type="button"
                    className="cbm_input_delete_column"
                    onClick={() => handleColumnDelete(index)}
                  >
                    <Close />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="cbm_buttons_container">
          {newBoard.columns.length < 5 && (
            <button
              id="add_column_button"
              className="cbm_button"
              type="button"
              onClick={() => handleNewColumn()}
            >
              <Add style={{ width: "0.9rem", height: "0.9rem" }} />
              Add New Column
            </button>
          )}
          <button
            id="create_board_button"
            className="cbm_button"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Create New Board
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoardModal;
