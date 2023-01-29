import React from 'react';
import Logo from '../../feature/Logo';
import { company } from '../../../schemes/company';
import * as S from './style';
import * as D from '../../ui/Display';

const GlobalFooter = () => {
    return (
        <S.Footer>
            <S.Inner>
                <Logo />
                <D.FlexCols _gap={12}>
                    <D.FlexRows _gap={32}>
                        <S.InfoTerm
                            to={"/"}
                        >이용약관</S.InfoTerm>
                        <S.InfoTerm
                            to={"/"}
                        >개인정보처리방침</S.InfoTerm>
                    </D.FlexRows>
                    <S.InfoCompany>
                        <ul>
                            <li>업체명: {company.name}</li>
                            <li>주소: {company.address}</li>
                            <li>사업자등록번호: {company.businessCode}</li>
                        </ul>
                        <ul>
                            <li>대표명: {company.represantative}</li>
                            <li>개인정보관리책임자: {company.privacyAgent}</li>
                        </ul>
                    </S.InfoCompany>
                    <S.InfoCopy>Copyright 2022 All rights reserved {company.name}.</S.InfoCopy>
                </D.FlexCols>
            </S.Inner>
        </S.Footer>
    )
};

export default GlobalFooter;