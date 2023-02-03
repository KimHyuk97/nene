import React from "react";
import styled from "styled-components";

const Container = styled.div<{
    _height: number,
    _bg: string
}>`
    width: 100%;
    height: ${props => props._height}px;
    background-color: ${props => props._bg};
`;

const Banner = () => {
    return (
        <>
            <Container _height={1200} _bg={"#dddddd"} />
            <Container _height={400} _bg={"blue"} />
            <Container _height={400} _bg={"red"} />
        </>
    )
}

export default Banner;