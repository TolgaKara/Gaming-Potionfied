import React from "react";

// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, id, image }) => {
	// Load Details
	const dispatch = useDispatch();

	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame onClick={loadDetailHandler}>
			<h3>{name}</h3>
			<p>{released}</p>
			<img src={image} alt={name} />
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	text-align: center;
	border-radius: 0.5rem;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
