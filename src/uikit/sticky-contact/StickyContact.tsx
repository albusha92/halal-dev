import * as React from 'react';
import SvgCall from '../icon-component/Call';
import SvgCallMessage from '../icon-component/CallMessage';
import SvgEnvelop from '../icon-component/Envelop';
import SvgInfor from '../icon-component/Infor';
import { IconContainer, StickyContactContainer } from './StickyContactStyled';

interface IStickyContactProps {
}

const StickyContact: React.FunctionComponent<IStickyContactProps> = (props) => {
	return (
		<StickyContactContainer>
			<IconContainer>
				<SvgCall />
			</IconContainer>
			<IconContainer>
				<SvgCallMessage />
			</IconContainer>
			<IconContainer>
				<SvgEnvelop />
			</IconContainer>
			<IconContainer>
				<SvgInfor />
			</IconContainer>
		</StickyContactContainer>
	);
};

export default StickyContact;
