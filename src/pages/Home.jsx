/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserData } from '../utils/FormatData';
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import DailyActivityChart from "../components/DailyActivityChart";
import AverageDurationChart from "../components/AverageDurationChart";
import RadarChart from "../components/RadarChart";
import ScoreChart from "../components/ScoreChart";
import Macronutrient from "../components/Macronutrient";
import "../styles/pages/home.css"

/**
 * @file React component for display the main page of the app
 * Render the whole page and call the charts components
 * @returns {JSX.Element} Main page components
 */

const Home = () => {

	const navigate = useNavigate();

	/**
	 * Id of the wanted user, currently 12 or 18
	 * {number} id
	 */
	let { id } = useParams();
	if (isNaN(id)) {
		navigate("../pages/Error.jsx")
	}
	id = parseInt(id)
	const [datas, setDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * call the getUserData fonction
	 * @param {number} id - id of the user
	 */
	/**
	 *  useEffect to perform side effects
	 *  call the import datas function
	 * @param {id} id - id of the user
	 * @returns {object} datas - datas of the user
	 */
	useEffect(() => {
		async function fetchDatas() {
			if (id !== 12 && id !== 18) {
				navigate("../pages/Error.jsx")
			}
			const newDatas = await getUserData(id);
			setDatas(newDatas);
			setIsLoading(false);
		}
		fetchDatas();
	}, [isLoading]);

	return (
		<div className="home">
			<HorizontalNav />
			<div className="home-body">
				<VerticalNav />
				<div className="home-content">
					<div className="home-user">
						<span className="home-user-hello">Bonjour </span>
						<span className="home-user-firstname">{datas.firstName}</span>
						<br />
						<br />
						<span className="home-user-greetings">
							Félicitation ! Vous avez explosé vos objectifs hier 👏
						</span>
					</div>
					<div className="home-charts">
						<div className="home-charts-first-column">
							<DailyActivityChart id={id} />
							<div className="home-charts-first-column-row-3">
								<AverageDurationChart id={id} />
								<RadarChart id={id} />
								<ScoreChart id={id} />
							</div>
						</div>
						<div className="home-charts-second-column">
							<Macronutrient id={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;