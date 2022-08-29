import styled from 'styled-components';

export const CartArea = styled.div`
	position: fixed;
	top: 21px;
	right: 20px;
	z-index: 1;
`;

export const CartHeader = styled.div`
	display: flex;
	align-items: center;
	width: 70px;
	height: auto;
	cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 20px;
    height: auto;
    margin-left: 20px;
    margin:right: 7px;
    padding-right: 25px;
`;

export const CartText = styled.div`
	flex: 1;
	color: #fff;
	font-size: 17px;
	margin-left: -50px;
	font-weight: bold;
`;

export const CartBody = styled.div`
	display: ${(props) => (props.opened ? 'block' : 'none ')};
`;

export const CartProductArea = styled.div`
	padding-top: 15px;
	padding-bottom: 20px;
	height: auto;
	margin-top: 33px;
	background: #333333; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #dd1818, #333333); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#dd1818,
		#333333
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	margin-right: -19px;
	height: auto;
`;

export const CartInfo = styled.div`
	flex: 1;
	margin-left: 10px;
	width: 65px;
`;

export const CartItem = styled.div`
	display: flex;
	margin: 8px;
	margin-bottom: 1rem;
`;

export const CartImg = styled.img`
	width: 20px;
	height: 15px;
	border-radius: 10px;
`;

export const CartName = styled.div`
	font-size: .7rem;
	font-weight: bold;
	color: #fff;
	margin-right: 15px;
`;

export const CartPrice = styled.div`
	font-size: 0.9rem;
	color: #000;
`;

export const CartQuantity = styled.div`
	display: flex;
	align-item: center;
`;

export const CartQuantityIcon = styled.img`
	width: 14px;
	height: 14px;
	cursor: pointer;
`;

export const CartQuantityText = styled.div`
	font-size: 15px;
	font-weight: bold;
	margin: 0px 5px;
	color: #000;
	padding-left: 2px;
`;
