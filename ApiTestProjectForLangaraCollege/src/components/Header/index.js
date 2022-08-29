import React from 'react';
import { Container, Logo, LinkArea, Search, SearchText, SearchImg } from './styled';
import { Link } from 'react-router-dom';

export default ({ search, onSearch }) => {
	const linkStyle = {
		textDecoration: 'none',
		marginRight: '4rem',
		color: '#fff',
	};

	return (
		<Container>
			<Logo src="/assets/canalogo.png" />
			<LinkArea>
				<Link to="/" style={linkStyle}>
					Home
				</Link>
				<Link to="/documentation" style={linkStyle}>
					{' '}
					Documentation
				</Link>
				<Search>
					<SearchText
						type="text"
						placeholder="Please type here..."
						value={search}
						onChange={(e) => onSearch(e.target.value)}
					/>
					<SearchImg src="/assets/search.png" />
				</Search>
			</LinkArea>
		</Container>
	);
};
