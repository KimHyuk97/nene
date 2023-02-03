import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	padding: 24px 0;
	border-top: 1px solid ${({ theme }) => theme.colors.gray1};
	@media (${({ theme }) => theme.media.tabletSmall}) {
		padding: 32px 18px;
	}
`;

export const Inner = styled.div`
	display: flex;
	gap: 40px;
	max-width: 1080px;
	margin: 0 auto;
	padding: 0 16px;
	@media (${({ theme }) => theme.media.tabletSmall}) {
		flex-direction: column;
		padding: 0;
		gap: 24px;
	}
`;

export const InfoTerm = styled(Link)`
	font-size: ${({ theme }) => theme.fontSizes.s};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.colors.gray9};
`;

export const InfoCompany = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 17px;
		li {
			position: relative;
			line-height: 18px;
			font-size: ${({ theme }) => theme.fontSizes.xxs};
			color: ${({ theme }) => theme.colors.gray6};
			&::after {
				content: "";
				position: absolute;
				top: 3px;
				right: -8px;
				width: 1px;
				height: 12px;
				@include background-color(gray3);
				background: ${({ theme }) => theme.colors.gray3};
			}
			&:last-child::after {
				display: none;
				@media (${(props) => props.theme.media.tabletSmall}) {
					display: block;
				}
			}
			a {
				font-size: ${({ theme }) => theme.fontSizes.xxs};
				color: ${({ theme }) => theme.colors.gray6};
			}
		}

		&:last-child li:last-child::after {
			display: none;
		}
	}
`;

export const InfoCopy = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.xxs};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.colors.gray5};
`;
