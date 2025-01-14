// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/demoWork" activeStyle>
						DemoWork
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
