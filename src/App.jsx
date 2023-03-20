import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import Board from "./components/Board";
import SideMenu from "./components/SideMenu";

import { ReactComponent as Show } from "./assets/show.svg";
import { toggleSideMenu } from "./state/ui";
import AddTaskModal from "./components/AddTaskModal";

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
    </div>
  );
};

export default App;
