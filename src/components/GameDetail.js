import React from "react";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Platforms Icons
import { FaPlaystation, FaSteam, FaXbox, FaGamepad } from "react-icons/fa";
import { SiNintendoswitch, SiApple, SiPlaystation3, SiPlaystation4 } from "react-icons/si";

// Star Icons
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

const GameDetail = ({ pathId }) => {
	const history = useHistory();
	// Exit Detail
	const handleExitDetail = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};

	// Get Rating in Star Icons
	const getStarIcon = () => {
		const stars = [];
		const rating = Math.floor(game.rating);
		for (let index = 1; index <= 5; index++) {
			if (index <= rating) {
				stars.push(<TiStarFullOutline />);
			} else {
				stars.push(<TiStarOutline />);
			}
		}
		return stars;
	};

	// Getting the right Icon for the right Platform
	const getPlatformIcon = (platform) => {
		switch (platform) {
			case "PlayStation 5":
				return <FaPlaystation />;
			case "PlayStation 4":
				return <SiPlaystation4 />;
			case "PlayStation 3":
				return <SiPlaystation3 />;
			case "Xbox One" || "Xbox 360" || "Xbox One" || "Xbox Series S/X":
				return <FaXbox />;
			case "PC":
				return <FaSteam />;
			case "Nintendo Switch":
				return <SiNintendoswitch />;
			case "iOS":
				return <SiApple />;

			default:
				return <FaGamepad />;
		}
	};

	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className='shadow' onClick={handleExitDetail}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className='rating'>
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
								{getStarIcon()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => getPlatformIcon(data.platform.name))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img layoutId={`image ${pathId}`} src={game.background_image} alt='image' />
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className='gallery'>
							{screen.results.map((screen) => (
								<img src={screen.image} key={screen.id} alt='game' />
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff6767;
		border-radius: 25px;
	}
	&::-webkit-scrollbar {
		background: #fff;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: #fff;
	position: absolute;
	z-index: 10;
	left: 10%;
	color: #000;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	svg {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetail;
