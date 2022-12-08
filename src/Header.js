import React, { useContext } from "react";
import Button from "./Button";

import styles from "./Header.css";

import { ThemeContext } from "./ThemeContext";

export default function Header({ title, theme, children }) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <Button onClick={onToggleTheme} theme={theme}>
                Mudar tema
            </Button>
            {children}
        </>
    );
}