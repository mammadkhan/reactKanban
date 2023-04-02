import useWindowSize from "./hooks/useWindowSize";

import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "./state/ui";
import "./App.css";

import Header from "./components/Header";
import Board from "./components/Board";
import SideMenu from "./components/SideMenu";
import Modals from "./components/Modals";

import { ReactComponent as Show } from "./assets/show.svg";

const App = () => {
  const dispatch = useDispatch();
  const size = useWindowSize();

  const ui = useSelector((state) => state.ui);
  const theme = useSelector((state) => state.theme);
  const board = useSelector((state) => state.board);

  return (
    <div className={"App" + (theme.theme === "dark" ? " dark" : " light")}>
      <Header />
      {size.width > 770 && <SideMenu />}
      {ui.mobileSideMenu && <SideMenu />}
      {!ui.sideMenuOpen && (
        <button className="show_side_menu" onClick={() => dispatch(toggleSideMenu())}>
          <Show />
        </button>
      )}
      <Board />
      <Modals />
    </div>
  );
};

export default App;
