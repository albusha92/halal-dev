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

interface IAboutInforProps {
}

interface tabModel {
	name: string;
	value: string;
	render: any;
	icon: any;
}

const CoreValues = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>
					Our core values
				</Title>
				<Desctiption>
					Our core values are <span>halal centric</span> and a driving force at Go Halal to offer the<span> best products and services</span> to our customers and partners. Our decisons, work culture and collaborations, our thinking and leadership are based on our core values for <span>creating value for our community, partners for a better and healthy</span> life.
				</Desctiption>
				<CharacterContainer>
					<Character />
				</CharacterContainer>

				<TheNumber />
				<History />

			</Container>
			<Media />
			<Container>
				<Press />
			</Container>
		</React.Fragment>
	)
}

const OurStory = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>
					Our Story
				</Title>
				<Desctiption>
					After migrating to Germany, Dr. Ali Abas Wani (Founder) realised that the current  halal market does not offer high quality  halal products and services. Being a food scientist  with food industry  and  consumer experience for more than 18 years, Dr. Wani  relaised that his experiences can benefit the halal customers and solve this problem to bring high quality authentic halal products in the current market. <br />
					Our team of food scientists, consumer & innovation experts make sure to bring authentic products to your basket  <span>through a rigrous screening, verification and auditing processes</span> in the halal supply chain. The ultimate goal is make it sure that the products you choose meet the high quality standards for a better health & service in the best possible manner.
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



const AboutInfor: React.FunctionComponent<IAboutInforProps> = (props) => {
	const [currentTab, setCurrentTab] = React.useState<tabModel>(tabs[0]);
	return (
		<React.Fragment>
			<TabHeaderContainer id="our-story">
				<TabContainer>
					{tabs.map(tab => {
						return <TabButton key={tab.value} icon={tab.icon} focus={currentTab.value === tab.value} onClick={() => setCurrentTab(tab)} name={tab.name} />
					})}
				</TabContainer>

			</TabHeaderContainer>
			<TabContentContainer>
				{currentTab.render}
			</TabContentContainer>
		</React.Fragment>
	);
};

export default AboutInfor;
