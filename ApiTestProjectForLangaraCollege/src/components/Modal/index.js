import React from 'react';
import { Container, ModalBody } from './styled';

export default ({ status, setStatus, children }) => {
	const handleMdClick = (e) => {
		if (e.target.classList.contains('modal')) {
			setStatus(false);
		}
	};

	return (
		<Container className="modal" status={status} onClick={handleMdClick}>
			<ModalBody>{children}</ModalBody>
		</Container>
	);
};
