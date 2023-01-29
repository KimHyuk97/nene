import React from "react";
import styled from "styled-components";

export const FlexCols = styled.div<{
    _gap?: string | number;
    _width?: string | number;
    _height?: string | number;
    _items?: string;
    _content?: string;
    _media?: string;
    _wrap?: string;
    _m_gap?: string | number;
    _m_width?: string | number;
    _m_height?: string | number;
    _m_items?: string;
    _m_content?: string;
    _m_wrap?: string;
    _style?: React.CSSProperties;
}>`
    display: flex !important;
    flex-direction: column !important;
    width: ${props => props._width !== undefined? props._width+ "px" : '100%'};
    height: ${props => props._height !== undefined? props._height+ "px" : 'auto'};
    gap: ${props => props._gap !== undefined ? props._gap+ "px" : 0}; 
    justify-content: ${props => props._content || 'initial'};
    align-items: ${props => props._items || 'initial'};
    flex-wrap: ${props => props._wrap || 'wrap'};
    
`;

export const FlexRows = styled.div<{
    _gap?: string | number;
    _width?: string | number;
    _height?: string | number;
    _items?: string;
    _content?: string;
    _media?: string;
    _wrap?: string;
    _m_gap?: string | number;
    _m_width?: string | number;
    _m_height?: string | number;
    _m_items?: string;
    _m_content?: string;
    _m_wrap?: string;
    _style?: React.CSSProperties;
}>`
    display: flex !important;
    flex-direction: row !important;
    gap: ${props => props._gap !== undefined ? props._gap+ "px" : 0};
    width: ${props => props._width !== undefined ? props._width+ "px" : '100%'};
    height: ${props => props._height !== undefined ? props._height+ "px" : 'auto'};
    justify-content: ${props => props._content || 'initial'};
    align-items: ${props => props._items || 'initial'};
    flex-wrap: ${props => props._wrap || 'wrap'};
`;