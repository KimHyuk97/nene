import styled from "styled-components";

export const Wrapper = styled.div`
	z-index: 1;
	position: relative;
	width: 100%;
	max-width: 100%;
	height: auto;
	header {
		z-index: 30;
	}
	footer {
		z-index: 10;
	}
	aside + main,
	header + main {
		margin-top: 80px;
	}
`;

export const Main = styled.main`
	z-index: 20;
	position: relative;
	width: 100%;
	max-width: 100%;
`;

export const Inner = styled.div`
	position: relative;
	max-width: 1080px;
	padding: 0 15px;
	margin: 0 auto;
	min-height: calc(100vh - 253px);
`;
