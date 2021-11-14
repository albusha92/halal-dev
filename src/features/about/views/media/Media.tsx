import * as React from 'react';
import SvgPlayVideo from '../../../../uikit/icon-component/PlayVideo';
import { Description, IconPlayContainer, MediaContainer, SeeMore } from './MediaStyled';

interface IMediaProps {
}

const Media: React.FunctionComponent<IMediaProps> = (props) => {
	return (
		<MediaContainer>
			<IconPlayContainer>
				<SvgPlayVideo />
			</IconPlayContainer>
			<Description>
				We Deliver Superior Customer Service & Business Success Through Our People.
			</Description>
			<SeeMore>
				{`see more videos >`}
			</SeeMore>
		</MediaContainer>
	);
};

export default Media;
