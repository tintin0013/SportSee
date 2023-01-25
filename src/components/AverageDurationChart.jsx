/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAverageChartData } from "../utils/FormatData";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from "recharts";
import "../styles/components/averageSession.css"


/**
 * React component to display average duration chart
 * @param {number} userId id of the user
 * @param {string} name name of the user
 * @param {number} sessionLength length of the session 
 * @returns {JSX.Element} Average sessions datas (days and duration)
 */

const AverageDurationChart = (userId) => {
	const [datas, setDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchDatas() {
			/**
			 * Call the import and format function
			 * {Array<object>} Average sessions datas (days and duration)
			 */
			const newDatas = await getAverageChartData(userId.id);
			setDatas(newDatas);
			setIsLoading(false);
		}
		fetchDatas();
	}, [isLoading]);

	/**
	 *
	 * @returns {JSX.Element} A div with text
	 */
	const Title = () => {
		return <div className="average-title">Durée moyenne des sessions</div>;
	};

	/**
	 * @param {boolean}  [Props.active='true'] active tooltip
	 * @param {array}   [Props.payload=[]] payload of the tooltip
	 * @returns an active tooltip
	 */
	const CustomizedTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="session-tooltip">
					<p className="session-tooltip-min">{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	};

	CustomizedTooltip.propTypes = {
		active: PropTypes.bool,
		payload: PropTypes.array,
	};
	/**
	 * @returns {JSX.Element} Average sessions datas (days and duration)
	 */
	/**
	 * A darker rectangle following the mouse on the chart
	 */
	const CustomCursor = ({ points }) => {
		return (
			<Rectangle
				fill="#000000"
				opacity={0.2}
				x={points[0].x}
				width={500}
				height={300}
			/>
		);
	};

	return (
		<>
			{isLoading && <div>Loading</div>}
			{!isLoading && (
				<div className="average-session">
					<ResponsiveContainer width="100%" height="100%">
						{
							<LineChart
								width={500}
								height={300}
								data={datas}
								margin={{
									top: 20,
									right: 15,
									left: 15,
									bottom: 15,
								}}
							>
								<XAxis
									dataKey="name"
									stroke={""}
									fillOpacity={0.5}
									style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
									tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 14 }}
								/>
								<YAxis hide={true} />
								<Line
									type="monotone"
									dataKey="sessionLength"
									stroke="#FFFFFF"
									dot={false}
									strokeWidth={2}
								/>
								<Tooltip
									content={<CustomizedTooltip />}
									cursor={<CustomCursor />}
								/>
								<Legend verticalAlign="top" align="left" content={Title} />
							</LineChart>
						}
					</ResponsiveContainer>
				</div>
			)}
		</>
	);
};

AverageDurationChart.propTypes = {
	id: PropTypes.number.isRequired,
};

export default AverageDurationChart;
