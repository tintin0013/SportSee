import API from "../utils/Api"

/**
 * @file FormatData.js is an import and format datas file
 */

const api = new API();
export function getAPI() {
	return api
}

/**
 * @async function
 * import and format user datas
 * @param {number} id id of the user
 * @param {string} firstName first name of the user
 * @param {string} lastName last name of the user
 * @param {number} age age of the user
 * @returns {object} user datas
 */
export async function getUserData(id) {

	/**
	 * Get the response of the fetch class
	 * {object} contains userInfos
	 */
	const response = await api.getUser(id);

	/**
	 * Get user datas
	 * {object} contains firstName, lastName and age
	 */
    const userData = response.data.userInfos;
	return userData;
}



/**
 * @async function
 * import and format data for the daily activity chart
 * @param {number} id id of the user
 * @param {number} kilogram kilogram of the user
 * @param {number} calories calories of the user
 * @param {number} day day number of the user
 * @returns {array<object>} Each objects contains kilogram, calories and day
 */
export async function getDailyActivityData(id) {

	/**
	 * Get the response of the fetch class
	 * {object} contains sessions
	 */
	const response = await api.getActivity(id);
	const userData = response.data.sessions;
	
	/**
	 * Map the datas in an array.
	 * {Array<object>} contains kilogram, calories and day
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
 * @async function
 * import and format data for the average duration chart
 * @param {number} id id of the user
 * @param {string} name name of the day
 * @param {number} sessionLength duration session's length
 * @returns {Array<object>} Each objects contains name and session's length
 */
export async function getAverageChartData(id) {

	/**
	 * Get the response of the fetch class
	 * {object} contains sessions
	 */
	const response = await api.getAverageSessions(id);

	/**
	 * Array contains each days
	 * {Array<letters>} contains L, M, M, J, V, S, D
	 */
	const days = ["L", "M", "M", "J", "V", "S", "D"];
	const sessions = response.data.sessions;

	/**
	 * Push the datas in an array.
	 * {Array<object>} contains name and duration session's length
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
 * @async function
 * import and format data for the radar chart
 * @param {number} id id of the user
 * @param {number} value value of the kind
 * @param {string} kind kind of the value
 * @returns {Array<object>} Each objects contains value and kind
 */
export async function getRadarData(id) {

	/**
	 * Get the response of the fetch class
	 * {object} contains data
	 */
	const response = await api.getPerformance(id);
	const userData = response.data.data;

	/**
	 * Contains every kind 
	 */
	const Kind = [
		"Cardio",
		"Energie",
		"Endurance",
		"Force",
		"Vitesse",
		"Intensit??",
	];

	/**
	 * Map the datas in an array.
	 * {Array<object>} contains value and kind
	 */
	let stat = userData.map(( {value, kind} ) => ({
		value,
		kind: Kind[kind - 1],
	}));
	return stat;
}

/**
 * @async function
 * import and format data for the score chart
 * @param {number} id id of the user
 * @param {number} score score of the user
 * @returns {number} score
 */
export async function getScoreData(id) {

	/**
	 * Get the response of the fetch class
	 * {object} contains score
	 */
	const response = await api.getUser(id);

	/**
	 * Due to back-end error there's two possible keys : todayScore or score.
	 */
	const userData = response.data.todayScore || response.data.score;
	return userData;
}

/**
 * @async function
 * import and format macronutrient datas
 * @param {number} id id of the user
 * @param {number} calorieCount calorie count of the user
 * @param {number} carbohydrateCount carbohydrate count of the user
 * @param {number} lipidCount lipid count of the user
 * @param {number} proteinCount protein count of the user
 * @returns {object} macronutrient datas
*/
export async function getMacronutrientData(id) {
	// const api = new API();

	/**
	 * Get the response of the fetch class
	 * {object} contains macronutrient datas
	 */
	const response = await api.getUser(id);

	/**
	 * Get macronutrients datas
	 * {object} contains macronutrient datas
	*/
	const userData = response.data.keyData;
	return userData;
}
