import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "./state/ui";

import "./App.css";

import Header from "./components/Header";
import Board from "./components/Board";
import SideMenu from "./components/SideMenu";
import AddTaskModal from "./components/AddTaskModal";
import TaskModal from "./components/TaskModal";
import DeleteTaskModal from "./components/DeleteTaskModal";

import { ReactComponent as Show } from "./assets/show.svg";

const App = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  return (
    <div className={"App" + (ui.theme === "dark" ? " dark" : " light")}>
      <Header />
      <SideMenu />
      {!ui.sideMenuOpen && (
        <button
          className="show_side_menu"
          onClick={() => dispatch(toggleSideMenu())}
        >
          <Show />
        </button>
      )}
      <Board />
      {ui.addNewTaskModal && <AddTaskModal />}
      {ui.taskModal.open ? (
        <TaskModal />
      ) : ui.taskModal.taskId ? (
        <AddTaskModal />
      ) : null}
      {ui.deleteTaskModal && <DeleteTaskModal />}
    </div>
  );
};

export default App;
