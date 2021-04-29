import React from "react";

import styled from "styled-components";
import { GiPotionBall } from "react-icons/gi";

// Animation
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<StyledNav>
			<Logo>
				<GiPotionBall /> Gaming Potionfied
			</Logo>
			<div className='search'>
				<input type='text' />
				<button>Search</button>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
		outline: none;
	}
	button {
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
		padding: 0.5rem 2rem;
		color: #fff;
		background: #b15454;
	}
`;
const Logo = styled(motion.h1)`
	padding: 1rem;
	cursor: pointer;
	color: #b15454;
`;

export default Navbar;
