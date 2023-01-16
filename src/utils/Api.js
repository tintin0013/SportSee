import axios from "axios";

export default class API {
    // constructor() {
    // }

        async getUser(id) {
            const res = await axios
                .get(`http://localhost:3000/user/${id}`)
                .catch((err) => 
                    alert("Erreur 503 : The server is currently unavailable.")
                );
                return res.data;
        }

        async getActivity(id) {
            const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
            return res.data;
        }
}