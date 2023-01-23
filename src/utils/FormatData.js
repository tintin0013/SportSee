import API from "../utils/Api"

/**
 * @file FormatData.js is an import and format datas file
 */

const api = new API();
export function getAPI() {
	return api
}

/**
 * import and format user datas
 * @type {function} async function
 * @param {number} id of user
 * @returns {object} user datas
 */
export async function getUserData(id) {

	/**
	 * Get the response of the fetch class
	 * @type {object} contains userInfos
	 * @param {number} id of user
	 */
	const response = await api.getUser(id);

	/**
	 * Get user datas
	 * @type {object} contains firstName, lastName and age
	 * @param firstName: first name {string}
	 */
    const userData = response.data.userInfos;
	return userData;
}



/**
 * import and format data for the daily activity chart
 * @type {function} async function
 * @param {number} id of user
 * @returns {array<object>} Each objects contains kilogram, calories and day
 */
export async function getDailyActivityData(id) {

	/**
	 * Get the response of the fetch class
	 * @type {object} contains sessions
	 * @param {number} id of user
	 */
	const response = await api.getActivity(id);
	const userData = response.data.sessions;
	
	/**
	 * Map the datas in an array.
	 * @type {Array<object>} contains kilogram, calories and day
	 * @param kilogram: kilogram {numbers}
	 * @param calories: calories {numbers}
	 * @param day: day number {number}
	 */
	let userDataDisplay = userData.map(({ kilogram, calories }, index) => {
		return {
			kilogram: kilogram,
			calories: calories,
			day: (index + 1).toString(),
		};
	});
	return userDataDisplay;
}

/**
 * import and format data for the average duration chart
 * @type {function} async function
 * @param {number} id of user
 * @returns {Array<object>} Each objects contains name and session's length
 */
export async function getAverageChartData(id) {

	/**
	 * Get the response of the fetch class
	 * @type {object} contains sessions
	 * @param {number} id of user
	 */
	const response = await api.getAverageSessions(id);

	/**
	 * Array contains each days
	 * @type {Array<letters>} contains L, M, M, J, V, S, D
	 * @params letters: days {string}
	 */
	const days = ["L", "M", "M", "J", "V", "S", "D"];
	const sessions = response.data.sessions;

	/**
	 * Push the datas in an array.
	 * @type {Array<object>} contains name and session's length
	 * @param name: days {string}
	 * @param sessionLength: duration {numbers}
	 */
	let results = [];
	sessions.forEach((session) => {
		results.push({
			name: days[session.day - 1],
			sessionLength: session.sessionLength,
		});
	});
	return results;
}

/**
 * import and format data for the radar chart
 * @type {function} async function
 * @param {number} id of user
 * @returns {Array<object>} Each objects contains value and kind
 */
export async function getRadarData(id) {

	/**
	 * Get the response of the fetch class
	 * @type {object} contains data
	 * @param {number} id of user
	 */
	const response = await api.getPerformance(id);
	const userData = response.data.data;

	/**
	 * Contains every kind
	 * @type {Kind<array>}  
	 */
	const Kind = [
		"Cardio",
		"Energie",
		"Endurance",
		"Force",
		"Vitesse",
		"Intensité",
	];

	/**
	 * Map the datas in an array.
	 * @type {Array<object>} contains value and kind
	 * @param value: value {numbers}
	 * @param kind: kind {string}
	 */
	let stat = userData.map(( {value, kind} ) => ({
		value,
		kind: Kind[kind - 1],
	}));
	return stat;
}

/**
 * import and format data for the score chart
 * @type {function} async function
 * @param {number} id of user
 * @returns {number} score
 */
export async function getScoreData(id) {

	/**
	 * Get the response of the fetch class
	 * @type {object} contains score
	 * @param {number} id of user
	 */
	const response = await api.getUser(id);

	/**
	 * Due to back-end error there's two possible keys : todayScore or score.
	 */
	const userData = response.data.todayScore || response.data.score;
	return userData;
}

/**
 * import and format macronutrient datas
 * @type {function} async function
 * @param {number} id of user
 * @returns {object} macronutrient datas
*/
export async function getMacronutrientData(id) {
	// const api = new API();

	/**
	 * Get the response of the fetch class
	 * @param {number} id of user
	 * @returns {object} contains macronutrient datas
	 */
	const response = await api.getUser(id);

	/**
	 * Get macronutrients datas
	 * @type {object} contains macronutrient datas
	 * @param calorieCount: {numbers}
	 * @param carbohydrateCount: Glucides {numbers}
	 * @param lipidCount: Lipides {numbers}
	 * @param proteinCount: Proteins {numbers}
	*/
	const userData = response.data.keyData;
	return userData;
}
