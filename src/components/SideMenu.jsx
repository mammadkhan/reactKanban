import { useSelector, useDispatch } from "react-redux";
import { changeSelected } from "../state/board";
import { toggleSideMenu, toggleAddNewBoardModal } from "../state/ui";
import "../styles/SideMenu.css";

import Theme from "./Theme";

import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as BoardIcon } from "../assets/board.svg";
import { ReactComponent as Hide } from "../assets/hide.svg";

const SideMenu = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const ui = useSelector((state) => state.ui);

  return (
    <aside className={"side_menu" + (!ui.sideMenuOpen ? " side_menu_hidden" : "")}>
      <div className="side_menu_top">
        <h3 className="side_menu_title">
          ALL BOARDS &#40; {Object.entries(board.data).length} &#41;
        </h3>
        <ul>
          {board.data.map((tboard, index) => (
            <li key={index}>
              <button
                className={
                  "side_menu_boards" +
                  (tboard.id === board.data[board.selected].id ? " board_selected" : "")
                }
                onClick={(e) => dispatch(changeSelected(tboard))}
              >
                <BoardIcon />
                {tboard.title}
              </button>
            </li>
          ))}
          <li>
            <button className="create_new_board" onClick={() => dispatch(toggleAddNewBoardModal())}>
              <BoardIcon style={{ marginRight: "1rem" }} />
              <Add style={{ fill: "var(--color-primary)" }} width="16px" height="16px" />
              Create New Board
            </button>
          </li>
        </ul>
      </div>
      <div className="side_menu_bottom">
        <Theme />
        <button className="side_menu_hide" onClick={() => dispatch(toggleSideMenu())}>
          <Hide /> Hide Sidebar
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;
