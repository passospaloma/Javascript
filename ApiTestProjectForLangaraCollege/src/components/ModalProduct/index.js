import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Container,
	ModalArea,
	ModalButtons,
	ModalButton,
	ModalImg,
	ModalInfo,
	ModalQtArea,
	ModalDetail,
	ModalQt,
	ModalName,
	ModalPrice,
	ModalQtImg,
	ModalQTText,
} from './styled';

export default ({ data, setStatus }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	//monitor the data when is changed
	useEffect(() => {
		setQuantity(1);
	}, [data]);

	const handleCancel = () => {
		setStatus(false);
	};
	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleAddCart = () => {
		// put together the info and send it to the reducer
		dispatch({
			type: 'ADD_PRODUCT',
			payload: {
				data,
				quantity,
			},
		});
		setStatus(false);
	};

	return (
		<Container>
			<ModalArea>
				<ModalImg src={data.image}></ModalImg>
				<ModalInfo>
					<ModalDetail>
						<ModalName>{data.name}</ModalName>
					</ModalDetail>
					<ModalQtArea>
						<ModalPrice>${data.price * quantity}</ModalPrice>
						<ModalQt>
							<ModalQtImg onClick={handleDecrease} src="/assets/minus.png" />
							<ModalQTText>{quantity}</ModalQTText>
							<ModalQtImg onClick={handleIncrease} src="/assets/plus.png" />
						</ModalQt>
					</ModalQtArea>
				</ModalInfo>
			</ModalArea>
			<ModalButtons>
				<ModalButton small={true} onClick={handleCancel}>
					Cancel
				</ModalButton>
				<ModalButton onClick={handleAddCart}>Add to cart</ModalButton>
			</ModalButtons>
		</Container>
	);
};
