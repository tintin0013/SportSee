/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getScoreData } from "../utils/FormatData";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "../styles/components/scoreChart.css"

const ScoreChart = (userId) => {
	const [datas, setDatas] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchDatas() {
			const newDatas = await getScoreData(userId.id);
			setDatas(newDatas);
		}
		fetchDatas();
		setIsLoading(false);
	}, [isLoading]);

	const score = [
		{
			uv: datas * 100,
			fill: "#ff0000",
		},
	];

	const ScoreLegend = () => {
		return (
			<>
				{isLoading && <div>Loading</div>}
				{!isLoading && datas && (
					<div className="score-legend">
						<div className="score-legend-score">{datas * 100}%</div>
						<div className="score-legend-text">de votre<br></br> objectif</div>
					</div>
				)}
			</>
		);
	};

	return (
		<>
			{isLoading && <div>Loading</div>}
			{!isLoading && score && (
				<div className="score-chart">
					<ResponsiveContainer width="100%" height="100%">
						<RadialBarChart
							innerRadius={80}
							outerRadius={260}
							barSize={10}
							startAngle={-270}
							endAngle={90}
							data={score}
						>
							<circle cx="50%" cy="50%" fill="white" r="80"></circle>
							<PolarAngleAxis
								type="number"
								domain={[0, 100]}
								angleAxisId={0}
								tick={false}
							/>
							<RadialBar
								background={{ fill: "#fbfbfb" }}
								dataKey="uv"
								cornerRadius="10"
							/>
							<Legend
								verticalAlign="middle"
								align="center"
								content={ScoreLegend}
							/>
							<text
								className="graphTitle"
								x="10%"
								y="15%"
								dominantBaseline="middle"
								style={{ fontWeight: 700, fontSize: 20 }}
							>
								Score
							</text>
						</RadialBarChart>
					</ResponsiveContainer>
				</div>
			)}
		</>
	);
};

ScoreChart.propTypes = {
	id: PropTypes.number.isRequired,
};

export default ScoreChart;
