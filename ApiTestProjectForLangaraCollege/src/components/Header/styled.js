import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: #000000; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #0f9b0f, #000000); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#0f9b0f,
		#000000
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	width: 97.5vw;
	padding: 20px;
	align-items: center;
	margin-bottom: 2rem;
`;

export const Logo = styled.img`
	width: auto;
	height: 60px;
	padding-left: 2rem;
`;

export const LinkArea = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20%;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
	align-items: center;
`;

export const Search = styled.div`
	width: 155px;
	height: 26px;
	padding-left: 20px;
	font-size: 15px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SearchImg = styled.img`
    width: 20px;
    height: 15px;
    margin-left: -22px;
    background-color: #background: #333333;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #dd1818, #333333);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #dd1818, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
    padding: 5.9px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const SearchText = styled.input`
    outline: transparent;
    border: none;
    cursor: pointer;
    &:focus {
        cursor: text;
    }
}`;
