import React, { useState, useEffect } from 'react';
import { Container, ProductArea, ProductList } from './styled';

import api from '../../api';

import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let timer = null;

export default (search) => {
	const [products, setProducts] = useState([]);
	//stores what is on searchbar
	const [headerSearch, setHeaderSearch] = useState('');
	const [statusModal, setStatusModal] = useState(true);
	const [dataModal, setDataModal] = useState({});
	// get what is typed e override the headerSearch
	const [activeSearch, setActiveSearch] = useState('');

	// load information about the products
	const getProducts = async () => {
		const p = await api.getProducts(activeSearch);
		if (p.error === '') {
			setProducts(p.result.data);
		}
	};

	// when products are modified, it cleans up the screen and loads again with products
	useEffect(() => {
		setProducts([]); // clean array
		getProducts(); // load products
	}, [activeSearch]);

	// time to wait for getting the letter on setHeaderSearch otherwise it saves each letter on searchbar,and monitors the headerSearch, each letter is monitored every 2 seconds
	useEffect(() => {
		clearTimeout(timer); //  cleans the timer to go one more time
		timer = setTimeout(() => {
			// start a 2 seconds count
			setActiveSearch(headerSearch); // do the search
		}, 2000);
	}, [headerSearch]);

	// Monitors Modal
	useEffect(() => {
		setStatusModal(false);
	}, []);

	const handleProductClick = (data) => {
		setDataModal(data); // go over the information
		setStatusModal(true); // show modal
	};

	return (
		<Container>
			{/* setHeaderSearch change text on searchbar */}
			<Header search={headerSearch} onSearch={setHeaderSearch} />

			{products.length > 0 && (
				<ProductArea>
					<ProductList>
						{products.map((item, index) => (
							<ProductItem key={index} data={item} onClick={handleProductClick} />
						))}
					</ProductList>
				</ProductArea>
			)}

			<Modal status={statusModal} setStatus={setStatusModal}>
				<ModalProduct data={dataModal} setStatus={setStatusModal} />
			</Modal>
		</Container>
	);
};
