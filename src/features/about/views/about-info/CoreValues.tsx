import * as React from 'react';
import Character from '../character/Character';
import History from '../history/History';
import Media from '../media/Media';
import TheNumber from '../number/TheNumber';
import Press from '../press/Press';
import { CharacterContainer, Container, Desctiption, Title } from './AboutInfoStyled';
import MediaPress from './media-press/MediaPress';

interface ICoreValuesProps {
}

const CoreValues: React.FunctionComponent<ICoreValuesProps> = (props) => {
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
				<MediaPress />
			</Container>
			<Media />
			<Container>
				<Press />
			</Container>
		</React.Fragment>
	);
};

export default CoreValues;
