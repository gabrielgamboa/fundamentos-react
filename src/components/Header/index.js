import React, { useContext } from "react";
import Button from "../Button";
import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

const Title = styled.h1`
    color: #637BF3;
`;

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