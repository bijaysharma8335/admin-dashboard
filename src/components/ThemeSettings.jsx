import React from "react";
import { useStateContext } from "../context/ContextProvider";

const ThemeSettings = () => {
    const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

    return <div ></div>;
};

export default ThemeSettings;
