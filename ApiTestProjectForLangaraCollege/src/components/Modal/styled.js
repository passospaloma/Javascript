import styled from 'styled-components';

export const Container = styled.div`
	display: ${(props) => (props.status ? 'flex' : 'none')};
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	righ: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 900;
	justify-content: center;
	align-items: center;
`;

export const ModalBody = styled.div`
	max-width: 100vw;
	max-height: 90vh;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 0px 50px #000;
	overflow: auto;
`;
