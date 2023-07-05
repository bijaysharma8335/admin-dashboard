import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState();
    const [currentColor, setcurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
    };

    const setColor = (color) => {
        setColor(color);
        localStorage.setItem("colorMode", color);
    };
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{
                screenSize,
                currentColor,
                currentMode,
                activeMenu,
                themeSettings,
                isClicked,
                setIsClicked,
                setScreenSize,
                setcurrentColor,
                setThemeSettings,
                setActiveMenu,
                setMode,
                setColor,
                handleClick,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
