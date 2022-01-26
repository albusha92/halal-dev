import * as React from 'react';
import { DetailText, HistoryContainer, HistoryTitle, MediaPressSaid, PressContainer } from '../../history/HistoryStyled';
import PressSlider from './PressSlider';

interface IMediaPressProps {
}

const MediaPress: React.FunctionComponent<IMediaPressProps> = (props) => {
	return (
		<React.Fragment>
			<PressContainer style={{ marginBottom: '0 !important' }}>
				<HistoryTitle>
					Media & Press
				</HistoryTitle>
				<DetailText>
					Our boots are big in the Halal foods industry. A global firm:Our products and operations have been recognized by intercontinental companies across the world. Read some of our partner testimonials below to be mesmerized… hopefully.
				</DetailText>
				<MediaPressSaid>
					I would like to personally thank you for your outstanding product. Farmart is both attractive and highly adaptable. I made back the purchase price in just 48 hours! Since I invested in Farmart I made over 100,000 dollars profits.
					<br />
					<br />
					Jonhny- <span>Dr. Ali Abas Wani CEO</span>
				</MediaPressSaid>

			</PressContainer>
			<PressSlider />
		</React.Fragment>
	);
};

export default MediaPress;
