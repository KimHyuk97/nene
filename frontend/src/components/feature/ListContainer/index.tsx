import React from "react";
import styled from "styled-components";
import list from "../../../data/menu.json";
import MenuCard from "../MenuCard";

interface ListContainerPropsType {
    title: string;
    category: string;
}

const ListContainer = ({ title, category }: ListContainerPropsType) => {
    return (
        <Container>
            <h1>{title}</h1>
            <div>
                {
                    list.map(item => (
                        <React.Fragment key={item.id}>
                            <MenuCard key={item.id} item={item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 338px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    margin: 60px 0;

    & h1 {
        font-size: 20px;
        font-weight: 700;
    }

    > div {
        display: flex;
        width: 100%;
        gap: 16px;
    
        @media screen and (max-width: 1280px) {
            overflow: scroll hidden;
            & ::webkit-scrollbar {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1280px) {
        padding: 0 16px;
    }
`

export default ListContainer;