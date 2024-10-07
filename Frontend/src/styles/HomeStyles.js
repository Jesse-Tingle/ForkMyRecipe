import styled from "styled-components"

export const ContainerDiv = styled.div`
	display: flex;
	margin: 5em 10em;
`
export const LeftSection = styled.div`
	background-color: #ff7f50;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	padding-top: 4em;

	& > p {
		margin-top: 1em;
		line-height: 1.3em;
		font-size: 1em;
		font-family: "Poppins", sans-serif;
		width: 35em;
	}
`
export const H1 = styled.div`
	font-family: "Chakra Petch", sans-serif;
	font-size: 2em;
	width: 20em;
	align-items: center;
	justify-content: center;
`

export const RightSection = styled.div`
	& > img {
		width: 100%;
		display: flex;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
	}
`
