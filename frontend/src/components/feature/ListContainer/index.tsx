import React from "react";
import styled from "styled-components";


interface ListContainerPropsType {
    title: string;
    category: string;
}

const ListContainer = ({title, category}: ListContainerPropsType) => {



    return (
        <Container>
            <h1>{title}</h1>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    padding: 0 16px;

    & h1 {
        font-size: 16px;
        font-weight: 700;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 0 20px;
    }

    & > div > div {
        width: 100%;
        height: 300px;
        max-width: 300px;
        max-height: 300px;
        background-color: #f2f2f2;
    }
`

export default ListContainer;