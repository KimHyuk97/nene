import styled from "styled-components";

const Container = styled.div<{
    _height: number,
    _bg: string
}>`
    width: 100%;
    height: ${props => props._height}px;
    background-color: ${props => props._bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
`;

const Banner = () => {
    return (
        <>
            <Container _height={800} _bg={"#e0e0e0"} >
                <p>1280 x 800</p>
            </Container>
            <Container _height={400} _bg={"#e0e0e0"}>
                <p>1280 x 400</p>
            </Container>
            <Container _height={400} _bg={"#e0e0e0"}>
                <p>1280 x 400</p>
            </Container>
        </>
    )
}

export default Banner;