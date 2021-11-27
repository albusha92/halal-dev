import * as React from 'react';
import { AboutHeaderContainer, Caption, Content, Detail, SubCaption } from './AboutHeaderStyled';
import banner from '../../../../assets/about/banner-transparent.png';
interface IAboutHeaderProps {
}

const AboutHeader: React.FunctionComponent<IAboutHeaderProps> = (props) => {
	return (
		<AboutHeaderContainer>
			<img src={banner} alt="" width="100%" />
			<Content>
				<Caption>
					About Go Halal
				</Caption>
				<SubCaption>
					Authentic halal for good Life
				</SubCaption>
				<Detail>
					Our mission is to offer the authentic high quality halal products and services for a better experience.
				</Detail>
			</Content>
		</AboutHeaderContainer>
	);
};

export default AboutHeader;
