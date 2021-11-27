import * as React from 'react';
import FounderMedia from '../../../meet-our-founders/views/media/FounderMedia';
import Character from '../character/Character';
import History from '../history/History';
import Media from '../media/Media';
import TheNumber from '../number/TheNumber';
import Press from '../press/Press';
import { CharacterContainer, Container, Desctiption, TabContainer, TabContentContainer, Title } from './AboutInfoStyled';
import TabButton from './TabButton';

interface IAboutInforProps {
}

interface tabModel {
	name: string;
	value: string;
	render: any;
}

const OurStory = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>
					Our story
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

const CoreValues = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>
					Our core values
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

const tabs: tabModel[] = [
	{
		name: "Our story",
		value: 'our-story',
		render: <OurStory />,
	},
	{
		name: "Core values",
		value: 'core-values',
		render: <CoreValues />,
	},
	{
		name: "Mission & vision",
		value: 'mission-vision',
		render: null,
	},
	{
		name: "Leadership",
		value: 'leadership',
		render: null,
	},
]



const AboutInfor: React.FunctionComponent<IAboutInforProps> = (props) => {
	const [currentTab, setCurrentTab] = React.useState<tabModel>(tabs[1]);
	// const 
	return (
		<React.Fragment>
			<Container>
				<TabContainer>
					{tabs.map(tab => {
						return <TabButton focus={currentTab.value === tab.value} onClick={() => setCurrentTab(tab)} name={tab.name} />
					})}
				</TabContainer>

			</Container>
			<TabContentContainer>
				{currentTab.render}
			</TabContentContainer>
		</React.Fragment>
	);
};

export default AboutInfor;
