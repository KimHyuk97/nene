import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import GlobalHeader from "../GlobalHeader"
import GlobalFooter from "../GlobalFooter"
import * as S from "./style"

interface GlobalLayoutProps {
    header?: boolean;
    footer?: boolean;
    title?: string;
    children?: React.ReactElement;
}

export default function GlobalLayout({
    header = true,
    footer = true,
    title = '',
    children = <></>
}: GlobalLayoutProps) {
    const location = useLocation()

    useEffect(() => {
        window.scroll(0, 0)
    }, [location])

    return (
        <S.Wrapper>
            {header && <GlobalHeader />}
            <S.Main>
                <S.Inner>
                    {children}
                </S.Inner>
            </S.Main>
            {footer && <GlobalFooter />}
        </S.Wrapper>
    )
}

