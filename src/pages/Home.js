import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/FormatData';
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import "../styles/pages/home.css"

const Home = () => {

	const id = 12;
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
				</div>
			</div>
		</div>
	);
};

export default Home;