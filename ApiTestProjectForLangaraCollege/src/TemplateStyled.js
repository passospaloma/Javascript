import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

export const Pages = styled.div`
	background: #ffe000; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #799f0c, #ffe000); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#799f0c,
		#ffe000
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Footer = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 20px; /* Height of the footer */
	background: #000000; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #0f9b0f, #000000); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#0f9b0f,
		#000000
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	color: #fff;
	width: 99vw;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`;
