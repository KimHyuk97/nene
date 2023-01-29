import React from 'react';
import styled from 'styled-components';

export const Box = styled.div<{
    _width?: number | string;
    _height?: number | string;
    _padding?: string;
    _margin?: string;
    _bgcolor?: string;
    _radius?: number | string;
    _border?: number | string;
    _bdcolor?: string;
    _shadow?: string;
    _textalign?: string;
    _scrollbar?: boolean;
    _media?: string;
    _m_width?: number | string;
    _m_height?: number | string;
    _m_padding?: string;
    _m_margin?: string;
    _m_radius?: number | string;
    _m_border?: number | string;
    _m_bgcolor?: string;
    _m_shadow?: string;
    customStyle?: React.CSSProperties;
}>`
    width: ${props => props._width? props._width : 'auto'};
    height: ${props => props._height? props._height : 'auto'};
    padding: ${props => props._padding? props._padding: '16px'};
    margin: ${props => props._margin? props._margin : '0 auto'};
    background-color: ${props => props._bgcolor? props.theme.colors[`${props._bgcolor}`] : 'white'};
    border-radius: ${props => props._radius? props._radius : '0'};
    border-width: ${props => props._border? props._border : '0'};
    border-style: solid;
    border-color: ${props => props._bdcolor? props.theme.colors[`${props._bdcolor}`] : 'transparent'};
    text-align: ${props => props._textalign? props._textalign : 'left'};
    box-shadow: ${props => props._shadow? props._shadow : 'none'};
    &::webkit-scrollbar {
        display: ${props => props._scrollbar? 'block' : 'none'}
    };
`;

export const ImageBox = styled.div<{
    bUrl: string;
    _width?: number | string;
    _height?: number | string;
    _radius?: number | string;
    _m_width?: number | string;
    _m_height?: number | string;
    _m_radius?: number | string;
    _media?: string;
    customStyle?: React.CSSProperties;
}>`
    width: ${props => props._width? props._width : 'auto'};
    height: ${props => props._height? props._height : 'auto'};
    border-radius: ${props => props._radius? props._radius : '0'};
    background: ${props => props.bUrl.length > 0? `url(${props.bUrl})` : '#EEE'};
    background-size: cover;
    background-color: white;
`;

export const LabelBox = styled.div<{
    _width?: string | number;
    _height?: number | string;
    _m_width?: string | number;
    _m_height?: number | string;
    _media?: string | number
}>`
    z-index: 21;
    position: relative;
    width: ${props => props._width? props._width : '100%'};
    height: ${props => props._height? props._height : 'auto'};
    input {
        z-index: 22;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
    }
    label {
        z-index: 23;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

export const Circle = styled.div<{
    cRadius: number;
    cBgColor?: string;
    cBdColor?: string;
    cBgImage?: string;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.cRadius * 2}px`};
    height: ${props => `${props.cRadius * 2}px`};
    border-radius: ${props => `${props.cRadius}px`};
    background-color: ${props => props.cBgColor? props.theme.colors[props.cBgColor] : '#fff'};
    background-image: ${props => props.cBgImage? `url(${props.cBgImage})` : 'none'};
    background-size: cover;
    border: ${props => props.cBdColor? `1px solid ${props.theme.colors[props.cBdColor]}` : '0'};
    overflow: hidden;
`;