import * as React from 'react';
import { BookOuline, DiamondHandOutline, GroupPeopleOutline, MoutainFlagOutline } from 'uikit/icon-component';
import FounderMedia from '../../../meet-our-founders/views/media/FounderMedia';
import Character from '../character/Character';
import History from '../history/History';
import Media from '../media/Media';
import TheNumber from '../number/TheNumber';
import Press from '../press/Press';
import { CharacterContainer, Container, Desctiption, MisstionContainer, TabContainer, TabContentContainer, TabHeaderContainer, Title } from './AboutInfoStyled';
import TabButton from './TabButton';
import Founders from './Founders';
import mission from 'assets/about/mission-vision.png';
import useQuery from 'hooks/useSearchQuery';
import CoreValues from './CoreValues';
import { useHistory } from 'react-router-dom';

interface IAboutInforProps {
}

interface tabModel {
	name: string;
	value: string;
	render: any;
	icon: any;
}


const OurStory = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>
					Our Story
				</Title>
				<Desctiption>
					When Dr. Ali Abas Wani came to Germany as an immigrant, he was thoroughly disappointed with the existing halal food shopping experience. Grocery stores, even specialty stores like Aldi and Lidl etc, offered little to no halal products, and the levels of hygiene and cleanliness at the exclusive halal supermarkets were not satisfactory whatsoever. As a Food Science Professor &  MBA graduate with 20 years of experience in food quality, hygenic design, halal traceability, packaging, and food safety principles, Dr. Wani knew that something had to be done. After quiting the job, Dr. Wani decided to step in. With his passion for halal, high quality food, and consumer service, he teamed up with Ferhat Balyeli and Philipp Tomio (Co-founders) at Mannheim and ESSEC business schools to establish a Go Halal market. Together, our combined 50 years of experience are helping reshape and revolutionize the halal shopping experience, providing our community with the highest quality authentic halal food for better health and a happier you.”
					<br />
					<br />
					Go Halal counts scientists and innovation experts amongst its ranks. Our halal supply chain is strictly monitored for quality, food safety and halal fraud to ensure that the fresh and high quality halal products are delivered to our custiomers.  Each of these processes is watched and audited by industry specialists – so you can sink your teeth into a home-delivered Halal meal at the end of it all.
				</Desctiption>
				<FounderMedia />
			</Container>
		</React.Fragment>
	)
}

const MissonVision = () => {
	return (
		<Container>
			<MisstionContainer>
				<img width={"100%"} alt='' src={mission} />
			</MisstionContainer>
		</Container>
	)
}

const tabs: tabModel[] = [
	{
		name: "Our story",
		value: 'our-story',
		render: <OurStory />,
		icon: <BookOuline />,
	},
	{
		name: "Mission & vision",
		value: 'mission-vision',
		render: <MissonVision />,
		icon: <MoutainFlagOutline />,
	},
	{
		name: "Core values",
		value: 'core-values',
		render: <CoreValues />,
		icon: <DiamondHandOutline />,
	},
	{
		name: "Founders",
		value: 'founders',
		render: <Founders />,
		icon: <GroupPeopleOutline />,
	},
]


const getNumberFromValue = (value: string) => {
	switch (value) {
		case 'out-story':
			return 0;
		case 'mission-vision':
			return 1;
		case 'core-values':
			return 2;
		case 'founders':
			return 3;
		default:
			return 0;
	}
}

const AboutInfor: React.FunctionComponent<IAboutInforProps> = (props) => {
	const query = useQuery().get('type');
	const [currentTab, setCurrentTab] = React.useState<tabModel>(tabs[0]);

	React.useEffect(() => {
		
		setCurrentTab(tabs[getNumberFromValue(query)])
	}, [query])

	React.useEffect(() => {
		document.getElementById("our-story")?.scrollIntoView({
			behavior: 'smooth',
			inline: "start",
		});
	}, [currentTab])

	return (
		<React.Fragment>
			<TabHeaderContainer id="our-story">
				<TabContainer>
					{tabs.map(tab => {
						return <TabButton key={tab.value} icon={tab.icon} focus={currentTab.value === tab.value} onClick={() => {
							// history.push({
							// 	pathname: '/about-us',
							// 	search: `?type=${tab.value}`
							// })
							setCurrentTab(tab)
						}
						} name={tab.name} />
					})}
				</TabContainer>

			</TabHeaderContainer>
			<TabContentContainer id="scroll">
				{currentTab.render}
			</TabContentContainer>
		</React.Fragment>
	);
};

export default AboutInfor;
