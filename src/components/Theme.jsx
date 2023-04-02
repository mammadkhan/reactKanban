import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../state/theme";

import "../styles/Theme.css";

import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";

const Theme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  return (
    <div className="theme">
      <Moon />
      <input
        type="checkbox"
        className="change_theme"
        onClick={() => dispatch(toggleTheme())}
        checked={theme.theme === "light"}
      />
      <Sun />
    </div>
  );
};

export default Theme;
