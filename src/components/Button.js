import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ onClick, children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <button 
            onClick={onClick}
            style={{
                color: theme === 'dark' ? '#fff' : '#000',
                background:  theme === 'dark' ? '#000' : '#fff',
            }}
        >
            {children}
        </button>
    );
}