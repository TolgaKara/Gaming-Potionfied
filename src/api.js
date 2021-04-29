// Helper Functions
// Function to retrieve the Date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	return month < 10 ? `0${month}` : month;
};
const getCurrentDay = () => {
	const day = new Date().getDate();
	return day < 10 ? `0${day}` : day;
};
const getCurrentYear = () => {
	return new Date().getFullYear();
};

// Helper Variables
const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

/*API ENDPOINTS*/
// Base URL
const baseURL = `https://api.rawg.io/api/`;

// Popular Games
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// upcoming Games
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates${currentDate},${nextYear}&ordering=-added&page_size=10`;

// new Games
const newGames = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;
export const newGamesURL = () => `${baseURL}${newGames}`;

// Details of the Game
export const gameDetailsURL = (gameId) =>
	`${baseURL}games/${gameId}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

// Game Screenshots
export const gameScreenshotURL = (gameId) =>
	`${baseURL}games/${gameId}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;

// Searched Game
export const searchGameURL = (gameName) =>
	`${baseURL}games?search=${gameName}&page_size=9&key=${process.env.REACT_APP_RAWG_API_KEY}`;
