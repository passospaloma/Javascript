import styled from 'styled-components';

export const Container = styled.div`
	width: 620px;
	padding: 20px;
`;

export const ModalArea = styled.div`
	display: flex;
	height: 200px;
`;

export const ModalButtons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	align-items: center;
`;

export const ModalImg = styled.img`
	width: 280px;
	border-radius: 10px;
`;

export const ModalInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 10px;
`;

export const ModalDetail = styled.div``;

export const ModalQtArea = styled.div`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ModalQt = styled.div`
	display: flex;
	align-items: center;
	background: #333333; /* fallback for old browsers /
background: -webkit-linear-gradient(to right, #dd1818, #333333);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#dd1818,
		#333333
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	padding: 10px;
	border-radius: 5px;
`;

export const ModalQtImg = styled.img`
	width: 24px;
	height: auto;
	margin-left: 10px;
	margin-right: 10px;
	cursor: pointer;
`;

export const ModalQTText = styled.div`
	font-size: 25px;
	font-weight: bold;
	color: #fff;
`;

export const ModalName = styled.div`
	font-size: 30px;
	font-weight: bold;
`;

export const ModalButton = styled.button`
	border: 0;
	background: #ffe000; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #799f0c, #ffe000); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#799f0c,
		#ffe000
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	box-shadow: 4px 5px 0px #888;
	color: #fff;
	font-size: ${(props) => (props.small ? '13px' : '22px')};
	font-weight: bold;
	padding: ${(props) => (props.small ? '5px 10px' : '10px 20px')};
	margin-left: 10px;
	border-radius: 5px;
	cursor: pointer;
`;

export const ModalPrice = styled.div`
	font-size: 30px;
	font-weight: bold;
`;
