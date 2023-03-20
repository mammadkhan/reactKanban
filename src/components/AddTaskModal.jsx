import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/AddTaskModal.css";

import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Down } from "../assets/down.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { useSelector } from "react-redux";

const AddTaskModal = () => {
  const board = useSelector((state) => state.board);

  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState({
    title:"",
    subtasks:[""],
  })

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    subtasks: [
      {
        id: "797b135a-93c6-4585-8da7-b4d161155c21",
        title: "",
        done: false,
      },
    ],
    status: board.data[board.selected].columns[0].title,
  });

  const handleSubtaskChange = (subtaskTitle, index) => {
    const newSubtasks = { ...userInput };
    newSubtasks.subtasks[index].title = subtaskTitle;
    setUserInput({
      ...userInput,
      subtasks: newSubtasks.subtasks,
    });
  };

  const createNewSubtask = () => {
    if (userInput.subtasks.length === 5) return;
    const newSubtasks = [...userInput.subtasks];
    newSubtasks.push({
      id: uuidv4(),
      title: "",
      done: false,
    });
    setUserInput({
      ...userInput,
      subtasks: newSubtasks,
    });
    setError({...error,subtasks:[...error.subtasks,""]})
  };

  const deleteSubtask = (index) => {
    setUserInput({
      ...userInput,
      subtasks: userInput.subtasks.filter((subtask, i) => i !== index),
    });
    setError({
      ...userInput,
      subtasks: error.subtasks.filter((subtask, i) => i !== index),
    })
  };

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleStatusChange = (title) => {
    setUserInput({ ...userInput, status: title });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userInput.title.trim() === "" && userInput.subtasks.some(subtask=>subtask.title.trim() === "")){
      setError({...error,title:"Required"})
      console.log(error)
      userInput.subtasks.forEach((subtask,index)=>{
        if(subtask.title.trim() === ""){
          const newSubtasks = [...userInput.subtasks]
          newSubtasks[index] = "Required"
          setError({...error,subtasks:newSubtasks})
        }
      })
    }
  };

  return (
    <div className="add_task_modal_container">
      <form className="add_task_modal">
        <h3 className="modal_title">Add New Task</h3>
        <div className="modal_section_container">
          <p className="section_title">Title</p>
          <input
            className="modal_input"
            type="text"
            name="title"
            value={userInput.title}
            onChange={(e) =>
              setUserInput({ ...userInput, title: e.target.value })
            }
            maxLength={150}
          />
          {error.title && <span className="modal_warning">{error.title}</span>}
        </div>
        <div className="modal_section_container">
          <p className="section_title">Description</p>
          <textarea
            id="description"
            className="modal_input"
            type="text"
            name="description"
            value={userInput.description}
            onChange={(e) =>
              setUserInput({ ...userInput, description: e.target.value })
            }
            maxLength={300}
          />
        </div>
        <div className="modal_section_container subtasks_wrapper">
          <p className="section_title">Subtasks</p>
          {userInput.subtasks.map((subtask, index) => (
            <div key={subtask.id} className="subtasks_container">
              <input
                className="modal_input"
                type="text"
                name="subtasks"
                value={subtask.title}
                onChange={(e) => handleSubtaskChange(e.target.value, index)}
              />

              <button
                type="button"
                className="delete_subtask"
                onClick={() => deleteSubtask(index)}
              >
                <Close />
              </button>
              {error.subtasks[index] && (
                <span className="modal_warning subtask_warning">
                  {error.subtasks[index]}
                </span>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="add_new_subtask"
          onClick={() => createNewSubtask()}
        >
          <Add style={{ width: "20px", height: "20px" }} />
          Add New Subtask
        </button>
        <div className="modal_section_container">
          <p className="section_title">Status</p>
          <button
            type="button"
            id="status_dropdown"
            className="modal_input"
            onClick={() => handleDropDown()}
          >
            {userInput.status}
            <Down style={{ width: "20px", height: "20px" }} />
          </button>
          {isOpen && (
            <div className="status_dropdown_container">
              {board.data[board.selected].columns.map((column) => (
                <button
                  key={column.id}
                  type="button"
                  className="status_dropdown_container_button"
                  onClick={() => handleStatusChange(column.title)}
                >
                  {column.title}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="create_task_button"
          onClick={(e) => handleSubmit(e)}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskModal;
