// src/styles/NavStyles.js
import styled from "styled-components"

// Navbar container
export const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	background-color: #2e8b57;
	padding: 15px;
	font-family: "Chakra Petch", sans-serif;
`

// Nav links
export const NavLink = styled.a`
	color: white;
	text-decoration: none;
	padding: 10px 20px;

	&:hover {
		background-color: #575757;
		border-radius: 5px;
	}
`

// Left section (logo and main links)
export const NavLeft = styled.div`
	display: flex;
	align-items: center;
`

// Right section (login/signup links)
export const NavRight = styled.div`
	display: flex;
	align-items: center;
`

// Logo
export const Logo = styled.a`
	font-size: 3em;
	font-weight: bold;
	color: white;
	text-decoration: none;
	margin-right: 1em;
`
