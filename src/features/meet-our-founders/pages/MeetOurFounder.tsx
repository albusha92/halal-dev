import { Col } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import avatar from '../../../assets//founders/avatar-member.png';
import avatar1 from '../../../assets//founders/avatar-member1.png';
import Footer from '../../../uikit/footer/Footer';
import SvgArrowLeftSquare from '../../../uikit/icon-component/ArrowLeftSquare';
import SvgArrowRightSquare from '../../../uikit/icon-component/ArrowRightSquare';
import IconContact from '../../../uikit/IconContact';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';
import { Container, TabContainer, TabContentContainer } from '../../about/views/about-info/AboutInfoStyled';
import TabButton from '../../about/views/about-info/TabButton';
import FounderList from '../views/founder-list/FounderList';
import Introduction from '../views/introduction/Introduction';
import { AvatarCircle, MemberCardContainer, MemberCardItem, MenberInforContainer, Name, Position } from '../views/meet-team/MeetTeamStyled';
import { MeetOurFounderContainer, TeamTabBtn, TeamTabContainer, TeamTabContent, TeamTabTitle } from './MeetOurFounderStyled';

interface IMeetOurFoundersProps {
}

interface tabModel {
	name: string;
	value: string;
	render: any;
}

interface teamTabModel {
	name: string;
	value: string;
	render: any;
}

const OurTeamContent = () => {
	const lap1920 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const mobileL = useMediaQuery({ query: '(min-width: 425px)' });
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: tablet768 ? "60px" : mobileL ? "40px" : "20px",
		slidesToShow: lap1920 ? 5 : tablet768 ? 4 : mobileL ? 2 : 2,
		speed: 500,
		rows: 2,
		slidesPerRow: 1,
		nextArrow: lap1024 ? <SampleNextArrow /> : <div></div>,
		prevArrow: lap1024 ? <SamplePrevArrow /> : <div></div>,
	};
	const history = useHistory();
	return (
		<TeamTabContent style={{ width: "100%" }}>
			<TeamTabTitle>
				Our Team
			</TeamTabTitle>
			<Slider {...settings}>
				{[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
					return (
						<div key={item}>
							<Col span={24}>
								<MemberCardContainer>
									<MemberCardItem>
										<AvatarCircle alt="" src={avatar} />
										<MenberInforContainer>
											<Name onClick={() => history.push("/biography")}>
												Dr. Ali Abas Wani
											</Name>
											<Position>
												Founder & CEO
											</Position>
											<IconContact />
										</MenberInforContainer>
									</MemberCardItem>
								</MemberCardContainer>
							</Col>
						</div>
					)
				})}
			</Slider>
		</TeamTabContent>
	)
}
const AdivisoryTeamContent = () => {
	const lap1920 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const mobileL = useMediaQuery({ query: '(min-width: 425px)' });
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: tablet768 ? "60px" : mobileL ? "40px" : "20px",
		slidesToShow: lap1920 ? 5 : tablet768 ? 4 : mobileL ? 2 : 2,
		speed: 500,
		rows: 2,
		slidesPerRow: 1,
		nextArrow: lap1024 ? <SampleNextArrow /> : <div></div>,
		prevArrow: lap1024 ? <SamplePrevArrow /> : <div></div>,
	};
	const history = useHistory();
	return (
		<TeamTabContent style={{ width: "100%" }}>
			<TeamTabTitle>
				Advisory Board
			</TeamTabTitle>
			<Slider {...settings}>
				{[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
					return (
						<div key={item}>
							<Col span={24}>
								<MemberCardContainer>
									<MemberCardItem>
										<AvatarCircle alt="" src={avatar1} />
										<MenberInforContainer>
											<Name onClick={() => history.push("/biography")}>
												Dr. Ali Abas Wani
											</Name>
											<Position>
												Founder & CEO
											</Position>
											<IconContact />
										</MenberInforContainer>
									</MemberCardItem>
								</MemberCardContainer>
							</Col>
						</div>
					)
				})}
			</Slider>
		</TeamTabContent>
	)
}

const ourTeamTabs: teamTabModel[] = [
	{
		name: "Meet Our Team",
		value: "team",
		render: <OurTeamContent />
	},
	{
		name: "Meet Our Advisory Board",
		value: "advisory",
		render: <AdivisoryTeamContent />
	}
]

function SampleNextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			style={{
				position: "absolute",
				height: "100%",
				right: "-2rem",
				top: "0",
				display: "flex",
				alignItems: "center",
				fontSize: "2rem",
				cursor: "pointer"
			}}
		>
			<SvgArrowRightSquare />
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			style={{
				position: "absolute",
				left: "-2rem",
				height: "100%",
				display: "flex",
				alignItems: "center",
				fontSize: "2rem",
				cursor: "pointer"
			}}
		>
			<SvgArrowLeftSquare />
		</div>
	);
}

const OurTeam = () => {
	const [currentTab, setCurrentTab] = React.useState<teamTabModel>(ourTeamTabs[0])

	return (
		<Container>
			<TeamTabContainer>
				{ourTeamTabs.map(team => {
					return (
						<TeamTabBtn
							key={team.value}
							className={currentTab.value === team.value ? "focus" : ""}
							onClick={() => {
								setCurrentTab(team);
							}}
						>
							{team.name}
						</TeamTabBtn>
					)
				})}
			</TeamTabContainer>
			{currentTab.render}
		</Container>
	)
}

const AdvisoryTeam = () => {
	const [currentTab, setCurrentTab] = React.useState<teamTabModel>(ourTeamTabs[0])
	const lap1920 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const mobileL = useMediaQuery({ query: '(min-width: 425px)' });
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: tablet768 ? "60px" : mobileL ? "40px" : "20px",
		slidesToShow: lap1920 ? 5 : tablet768 ? 4 : mobileL ? 2 : 2,
		speed: 500,
		rows: 2,
		slidesPerRow: 1,
		nextArrow: lap1024 ? <SampleNextArrow /> : <div></div>,
		prevArrow: lap1024 ? <SamplePrevArrow /> : <div></div>,
	};
	return (
		<Container>
			<TeamTabContainer>
				{ourTeamTabs.map(team => {
					return (
						<TeamTabBtn
							key={team.value}
							className={currentTab.value === team.value ? "focus" : ""}
							onClick={() => {
								setCurrentTab(team);
							}}
						>
							{team.name}
						</TeamTabBtn>
					)
				})}
			</TeamTabContainer>
			<TeamTabContent style={{ width: "100%" }}>
				<Slider {...settings}>
					{[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
						return (
							<div key={item}>
								<Col span={24}>
									<MemberCardContainer>
										<MemberCardItem>
											<AvatarCircle alt="" src={avatar1} />
											<MenberInforContainer>
												<Name>
													Dr. Ali Abas Wani
												</Name>
												<Position>
													Founder & CEO
												</Position>
												<IconContact />
											</MenberInforContainer>
										</MemberCardItem>
									</MemberCardContainer>
								</Col>
							</div>
						)
					})}
				</Slider>
			</TeamTabContent>
		</Container>
	)
}

const tabs: tabModel[] = [
	{
		name: "Leadership",
		value: 'leadership',
		render: <OurTeam />,
	},
	{
		name: "Our team",
		value: 'our-team',
		render: <OurTeam />,
	},
	{
		name: "Advisory board",
		value: 'advisory-board',
		render: <OurTeam />,
	},
	{
		name: "Executive board",
		value: 'executive-board',
		render: <AdvisoryTeam />,
	},
]

const MeetOurFounders: React.FunctionComponent<IMeetOurFoundersProps> = (props) => {
	const [currentTab, setCurrentTab] = React.useState<tabModel>(tabs[1]);
	return (
		<MeetOurFounderContainer>
			<StickyContact />
			<Introduction />
			<FounderList />
			<Container>
				<TabContainer>
					{tabs.map(tab => {
						return <TabButton key={tab.value} focus={currentTab.value === tab.value} onClick={() => setCurrentTab(tab)} name={tab.name} />
					})}
				</TabContainer>
			</Container>
			<TabContentContainer>
				{currentTab.render}
			</TabContentContainer>
			<Footer />
		</MeetOurFounderContainer>
	);
};

export default MeetOurFounders;
