// src/components/Navbar.js
import React from "react"
import { Navbar, NavLeft, NavRight, NavLink, Logo } from "../styles/NavStyles"

const NavbarComponent = () => {
	return (
		<>
			<Navbar>
				<NavLeft>
					<Logo href="#">Fork My Recipe</Logo>
					<NavLink href="#">About</NavLink>
					<NavLink href="#">Pricing</NavLink>
					<NavLink href="#">Support</NavLink>
				</NavLeft>
				<NavRight>
					<NavLink href="#">Login</NavLink>
					<NavLink href="#">Sign Up</NavLink>
				</NavRight>
			</Navbar>
		</>
	)
}

export default NavbarComponent
