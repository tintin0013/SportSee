import axios from "axios";

/**
 * @file Fetch API class using axios or Fetch json file
 * */
export default class API {
    constructor() {
        this.mockMode = true
    }

    changeMockMode(newMockMode) {
        this.mockMode = newMockMode
    }

        /**
         * Fetch user datas
         * @param {number} id of user
         * @returns {object} user datas
         */
        async getUser(id) { 

            /**
             * Fetch datas from json file
             * @type {object} contains userInfos
             */
            if (this.mockMode) {
                const res = await fetch(`../db.json`);
                const datas = await res.json();
                for(const d of datas)  {
                    if(d.data.id===id){
                        return d;
                    }
                }
            }
            /**
             * Fetch datas from API
             * @type {object} contains userInfos
             */
            else {
                const res = await axios
                .get(`http://localhost:3000/user/${id}`)
                    return res.data;
                }
        }

        /**
         * Fetch activity datas
         * @param {number} id of user
         * @returns {object} activity datas
         */
        async getActivity(id) {

            /**
             * Fetch datas from json file
             * @type {object} contains sessions
             */
            if (this.mockMode){
                const res = await fetch(`../db.json`);
                const datas = await res.json();
                let returnValue={
                    "data": undefined
                };
                for(const d of datas)  {
                    if(d.data.id===id){
                        let sessions = {}
                        sessions = d.activity.sessions
                        returnValue.data = {sessions}
                        return returnValue;
                    }    
                }
            }
            /**
             * Fetch datas from API
             * @type {object} contains sessions
             */
            else {
                const res = await axios
                .get(`http://localhost:3000/user/${id}/activity`);
                return res.data;
            }
        }
      
        /**
         * Fetch average sessions datas
         * @param {number} id of user
         * @returns {object} average sessions datas
         */
        async getAverageSessions(id) {

            /**
             * Fetch datas from json file
             * @type {object} contains sessions
             */
            if (this.mockMode){
                 const res = await fetch(`../db.json`);
                const datas = await res.json();
                let returnValue={
                    "data": undefined
                };
                for(const d of datas)  {
                    if(d.data.id===id){
                        let sessions = {}
                        sessions = d.averageSessions.sessions
                        returnValue.data = {sessions}
                        return returnValue;
                    }    
                }
            }
            /**
             * Fetch datas from API
             * @type {object} contains sessions
             */
            else {
                const res = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`);
                return res.data;
            }
        }

        /**
	 * Fetch performances datas
	 * @param {number} id of user
	 * @returns {object} performances datas
	 */
        async getPerformance(id) {

            /**
             * Fetch datas from json file
             * @type {object} contains performances
             */
            if (this.mockMode){
                const res = await fetch(`../db.json`);
                const datas = await res.json();
                let returnValue={
                    "data": undefined
                };
               
                for(const d of datas)  {
                    if(d.data.id===id){
                        let data = {}
                         data = d.performance.data
                        let kind = d.performance.kind
                        returnValue.data = {data,kind}
                        return returnValue;
                    }    
                }
            }
            /**
             * Fetch datas from API
             * @type {object} contains performances
             */
            else {
                const res = await axios
                .get(`http://localhost:3000/user/${id}/performance`);
                return res.data;
            }
        }
}