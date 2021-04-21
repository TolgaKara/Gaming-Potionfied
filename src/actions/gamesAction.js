import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
	// FETCH AXIOS
	console.log(popularGamesURL());
	const popularGamesData = await axios.get(popularGamesURL());
	const upcomingGamesData = await axios.get(upcomingGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularGamesData.data.results,
			upcoming: upcomingGamesData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};
