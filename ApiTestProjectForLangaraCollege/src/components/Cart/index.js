import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	CartArea,
	CartBody,
	CartHeader,
	CartIcon,
	CartText,
	CartInfo,
	CartItem,
	CartImg,
	CartProductArea,
	CartName,
	CartPrice,
	CartQuantity,
	CartQuantityIcon,
	CartQuantityText,
} from './styled';

export default () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart.products);
	const [opened, setOpened] = useState(true);

	const handleCart = () => {
		setOpened(!opened);
	};
	const handleCartChange = (key, type) => {
		dispatch({
			type: 'CHANGE_PRODUCT',
			payload: {
				key,
				type,
			},
		});
	};
	const cart = {
		width: '43px',
		marginTop: '10px'
	};

	return (
		<CartArea>
			<CartHeader onClick={handleCart}>
				<CartIcon src="/assets/cart.png" style={cart} />
				<CartText>{products.length}</CartText>
				{opened && <CartIcon src="/assets/down.png" />}
			</CartHeader>
			<CartBody opened={opened}>
				<CartProductArea>
					{products.map((item, index) => (
						<CartItem key={index}>
							<CartImg src={item.image} />
							<CartInfo>
								<CartName>{item.name}</CartName>
								<CartPrice>${(item.price * item.quantity)}</CartPrice>
							</CartInfo>
							<CartQuantity>
								<CartQuantityIcon
									src="/assets/minus.png"
									onClick={() => handleCartChange(index, '-')}
								/>
								<CartQuantityText>{item.quantity}</CartQuantityText>
								<CartQuantityIcon onClick={() => handleCartChange(index, '+')} src="/assets/plus.png" />
							</CartQuantity>
						</CartItem>
					))}
				</CartProductArea>
			</CartBody>
		</CartArea>
	);
};
