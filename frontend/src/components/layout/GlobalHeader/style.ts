import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray1};
    z-index: 1;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;



