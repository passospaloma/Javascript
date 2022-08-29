import React from 'react';
import {
	Container,
	ProductImage,
	ProductImageArea,
	ProductInfo,
	ProductName,
	ProductPrice,
	ProductButton,
} from './styled';

export default ({ data, onClick }) => {
	const handleModal = () => {
		onClick(data);
	};
	return (
		<Container onClick={handleModal}>
			<ProductImageArea>
				<ProductImage src={data.image} />
			</ProductImageArea>
			<ProductInfo>
				<ProductName>{data.name}</ProductName>
				<ProductPrice>${data.price}</ProductPrice>
			</ProductInfo>
			<ProductButton src="/assets/next.png" />
		</Container>
	);
};
