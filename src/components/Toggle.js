import React from "react";
import nightMode from "./images/night-mode.png";
import dayMode from "./images/sun.png";
import styled from "styled-components";

let Sun, Moon;

Sun = Moon = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 2rem;
  right: 4rem;
  transition: all 0.5s linear;
`;

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon src={nightMode} alt="night mode icon" />
      ) : (
        <Sun src={dayMode} alt="day mode icon" />
      )}
    </div>
  );
};
