import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	padding: 10px;
	color: #000;
	cursor: pointer;
	margin-right: 2.5rem;
	margin-bottom: 3rem;
	margin-top:1rem;
`;

export const ProductImageArea = styled.div`
	width: 80px;
`;

export const ProductImage = styled.img`
	width: 100%;
`;

export const ProductInfo = styled.div`
	flex: 1;
	margin-left: 5px;
	margin-right: 5px;
`;

export const ProductName = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
`;

export const ProductPrice = styled.div`
	font-size: 1rem;
`;

export const ProductButton = styled.img`
	width: 15px;
`;

export const ProductButtonArea = styled.div``;
