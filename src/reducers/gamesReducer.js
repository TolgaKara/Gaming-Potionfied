// import axios from 'axios'

const initState = {
	popular: [],
	newest: [],
	upcoming: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return {
				...state,
				popular: action.payload.popular,
				upcoming: action.payload.upcoming,
				newGames: action.payload.newGames,
			};
		case "FETCH_SEARCHED":
			return {
				...state,
				searched: action.payload.searched,
			};
		case "CLEAR_SEARCHED":
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};

// Action creator
const fetchGames = (userData) => {
	return {
		type: "FETCH_GAMES",
		payload: userData,
	};
};

export default gamesReducer;
