import * as React from 'react';
import { AvatarImage, CirclePoint, DateTimeText, DetailText, HistoryContainer, HistoryItem, HistoryProgress, HistoryProgressMobile, HistoryTitle, InformationContainer, ItemDetail, PointContainer, ProgressBar, YearItem, YearsContainer } from './HistoryStyled';
import avatar from '../../../../assets/history/avatar.png';
import avatar1 from '../../../../assets/history/avatar1.png';
import { Col, Row } from 'antd';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
interface IHistoryProps {
}

const historyList = [
	{
		avatar: avatar,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2015
	},
	{
		avatar: avatar1,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2016
	},
	{
		avatar: avatar,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2017
	},
	{
		avatar: avatar1,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2018
	},
	{
		avatar: avatar,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2019
	},
	{
		avatar: avatar1,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2020
	},
	{
		avatar: avatar1,
		date: moment().format("MMMM DD, YYYY"),
		detail: "Sumeet Tumelo and Niraj Carbry come up with for the first time by the idea for Organic Market and get lauched as online marketplace merchant in Califorlia, United States.",
		year: 2021
	},
]

const History: React.FunctionComponent<IHistoryProps> = (props) => {
	const [chosen, setChosen] = React.useState<number>(0);
	const [currentHistory, setCurrentHistory] = React.useState<any>(historyList[0]);

	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<HistoryContainer>
			<HistoryTitle>
				History
			</HistoryTitle>
			<DetailText>
				Since launching in 2009, Farmart has empowered over 11,000 small scale-farmers across worldwide. We are committed to expanding our reach in order to continue to empower local farmers, positively impact their lives and their families while boosting food production and sustainability.
			</DetailText>
			{tablet768 ? <HistoryProgress>
				<HistoryItem>
					<Row align="middle" justify={"space-between"}>
						<Col span={4}>
							<AvatarImage src={currentHistory.avatar} alt="" />
						</Col>
						<Col span={18}>
							<InformationContainer>
								<DateTimeText>
									{currentHistory.date}
								</DateTimeText>
								<ItemDetail>
									{currentHistory.detail}
								</ItemDetail>
							</InformationContainer>
						</Col>
					</Row>
				</HistoryItem>
				<ProgressBar>
					<PointContainer>
						{historyList.map((item, idx) => {
							return (
								<CirclePoint onClick={() => {
									setCurrentHistory(item);
									setChosen(idx)
								}} className={idx === chosen ? "chosen" : ""} key={idx} />
							)
						})}
					</PointContainer>
				</ProgressBar>
				<YearsContainer>
					{historyList.map((item, idx) => {
						return (
							<YearItem key={idx} className={idx === chosen ? "chosen" : ""}>{item.year}</YearItem>
						)
					})}
				</YearsContainer>
			</HistoryProgress> : <HistoryProgressMobile>
				{
					historyList.map((item, idx) => {
						return (
							<HistoryItem key={idx}>
								<Row align="middle" justify={"space-between"}>
									<Col span={4}>
										<AvatarImage src={item.avatar} alt="" />
									</Col>
									<Col span={18}>
										<InformationContainer>
											<DateTimeText>
												{item.date}
											</DateTimeText>
											<ItemDetail>
												{item.detail}
											</ItemDetail>
										</InformationContainer>
									</Col>
								</Row>
							</HistoryItem>
						)
					})
				}
			</HistoryProgressMobile>}
		</HistoryContainer>
	);
};

export default History;
