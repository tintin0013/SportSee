import API from "../utils/Api"

export async function getUserData(id) {
	const api = new API();

	const response = await api.getUser(id);
    const userData = response.data.userInfos;
	return userData;
}