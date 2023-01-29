import React from "react"
import * as S from "./style"
import Logo from "components/feature/Logo"


const GlobalHeader = () => {
    return (
        <S.Header>
            <S.Inner>
                <Logo path="/" size={"small"} />
            </S.Inner>
        </S.Header>
    )
}

export default GlobalHeader
