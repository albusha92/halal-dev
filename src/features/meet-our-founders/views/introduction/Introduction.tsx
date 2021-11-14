import * as React from 'react';
import { colors } from '../../../../config/constants';
import { Caption, IntroductionContainer, IntroText } from './IntroductionStyled';

interface IIntroductionProps {
}

const Introduction: React.FunctionComponent<IIntroductionProps> = (props) => {
	return (
		<IntroductionContainer>
			<Caption>
				Meet our founders
			</Caption>
			<IntroText>
				Go Halal is an early stage venture for <span style={{ color: colors.primary }}>nutritious, healthy and authentic halal food </span> products for the consumers who strive for better health and quality of products with halal flavour.
			</IntroText>
		</IntroductionContainer>
	);
};

export default Introduction;
