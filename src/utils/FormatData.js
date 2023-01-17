import API from "../utils/Api"

export async function getUserData(id) {
	const api = new API();
	const response = await api.getUser(id);
    const userData = response.data.userInfos;
	return userData;
}

export async function getDailyActivityData(id) {
	const api = new API();
	const response = await api.getActivity(id);
	const userData = response.data.sessions;
	let userDataDisplay = userData.map(({ kilogram, calories }, index) => {
		return {
			kilogram: kilogram,
			calories: calories,
			day: (index + 1).toString(),
		};
	});
	return userDataDisplay;
}

export async function getAverageChartData(id) {
	const api = new API();
	const response = await api.getAverageSessions(id);
	const days = ["L", "M", "M", "J", "V", "S", "D"];
	const sessions = response.data.sessions;
	let results = [];
	sessions.forEach((session) => {
		results.push({
			name: days[session.day - 1],
			sessionLength: session.sessionLength,
		});
	});

	return results;
}


