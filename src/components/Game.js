import React from "react";

// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
// import { getSmallImage } from "../util";

const Game = ({ name, released, id, image }) => {
	const stringPathId = id.toString();
	// Load Details Handler
	const dispatch = useDispatch();

	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
