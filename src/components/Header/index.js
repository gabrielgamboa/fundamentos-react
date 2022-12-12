import React, { useContext } from "react";
import Button from "../Button";
import Title from "../Title";

import { ThemeContext } from "../../context/ThemeContext";


export default function Header({ title, theme, children }) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title>{title}</Title>
            <Button onClick={onToggleTheme} theme={theme}>
                Mudar tema
            </Button>
            {children}
        </>
    );
}