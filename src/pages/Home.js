/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../utils/FormatData';
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import DailyActivityChart from "../components/DailyActivityChart";
import AverageDurationChart from "../components/AverageDurationChart";
import RadarChart from "../components/RadarChart";
import "../styles/pages/home.css"

const Home = () => {
	let {id} = useParams();
	id = parseInt(id)
	console.log(id)
	console.log(typeof id)
	const [datas, setDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchDatas() {
			const newDatas = await getUserData(id);
			setDatas(newDatas);
		}
		fetchDatas();
		setIsLoading(false);
	}, [isLoading]);
	

	return (
		<div className='home'>
			<HorizontalNav />
			<div className='home-body'>
				<VerticalNav />
				<div className='home-content'>
					<div className="home-user">
						<span className="home-user-hello">Bonjour </span>
						<span className="home-user-firstname">{datas.firstName}</span>
						<br />
						<br />
						<span className="home-user-greetings">
							Félicitation ! Vous avez explosé vos objectifs hier 👏
						</span>
					</div>
					<div className="home-user-greetings">
						<div className="home-charts-first-column">
							<DailyActivityChart id={id} />
							<div className="home-charts-first-column-row-3">
								<AverageDurationChart id={id} />
								<RadarChart id={id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;