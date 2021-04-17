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
const baseURL = "https://api.rawg.io/api/";

// Popular Games
const popularGames = `games?dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;
