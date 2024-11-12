import React from "react";
import UseLocalstorage from "./UseLocalstorage";
import "./theme.css"

function Darkmodelight() {
  const [theme, settheme] = UseLocalstorage("theme", "dark");
  function handletoggle() {
    settheme(theme == "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="dark-mode-light" data-theme={theme}>
      <div className="container">
        <h1>hello world!</h1>
        <button onClick={handletoggle}>change theme</button>
      </div>
    </div>
  );
}

export default Darkmodelight;
