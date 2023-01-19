import axios from "axios";
// import Mocked from "./Mocked"

export default class API {
    // constructor() {
    // }

        async getUser(id) {
            const res = await axios
                .get(`http://localhost:3000/user/${id}`)
                .catch((fonction) => 
                    /* It's an alert that will be displayed if the server is unavailable. */
                    alert("Erreur 503 : The server is currently unavailable.")
                    // fetch(`../db.json/${id}`)
                    // .then((response) => response.json())
                    // .then((res) => {
                    //     console.log(res)
                    //     console.log(res.data)
                    //     return res.data;
                    // })


                    // axios.get("./public/db.json")
                    // .then((res) =>
                    //  )
                )
                return res.data;
        }

        async getActivity(id) {
            const res = await axios
            .get(`http://localhost:3000/user/${id}/activity`);
            return res.data;
        }

        async getAverageSessions(id) {
            const res = await axios
            .get(`http://localhost:3000/user/${id}/average-sessions`);
            return res.data;
        }

        async getPerformance(id) {
            const res = await axios
            .get(`http://localhost:3000/user/${id}/performance`);
            return res.data;
        }
}