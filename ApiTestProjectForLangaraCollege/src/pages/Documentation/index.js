import React from 'react';
import { Container, DocumentTitle, DocumentText } from './styled';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default () => {
	return (
		<Container>
			<Header />
			<DocumentTitle>Project Documentation</DocumentTitle>
			<DocumentText>
				This Site was created for the 2261 Web Technology final project. In this website
				there are products that can be clicked and it opens a modal and then the quantity 
				of the product can be choosen, it changes the quantity and the price, the add to cart
				button will add the product to the cart and the cancel button will close the modal and 
				cancel the item. If the modal product is open one more time and the same item is choosen,
				it will automatically increase in the cart. The cart icon opens or closes the cart
				window if clicked and it shows the items in the cart, if you press plus or minus,
				it increases or decreases the quantity, if the quantity goes belows 1, it cancels 
				the product and remove it from the cart. The website also has 3 menus items, home
				and documentation and searchbar. The searchbar is receiving the requisition but not
				displaying the item because there is a problem with the mockable api.
			</DocumentText>
			<Footer />
		</Container>
	);
};
