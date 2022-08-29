import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Pages } from './TemplateStyled';

import Cart from './components/Cart';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Footer from './components/Footer';

export default () => {
	return (
		<BrowserRouter>
			<Container>
				<Pages>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/documentation">
							<Documentation />
						</Route>
					</Switch>
				</Pages>
				<Cart />
				<Footer />
			</Container>
		</BrowserRouter>
	);
};
