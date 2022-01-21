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
		<div style={{ position: "absolute", right: "0", bottom: "0", height: "100%" }}>
			<StickyContactContainer>
				<IconContainer>
					<SvgCall color='white' />
				</IconContainer>
				<IconContainer>
					<SvgCallMessage />
				</IconContainer>
				<IconContainer>
					<SvgEnvelop color='white' />
				</IconContainer>
				<IconContainer>
					<SvgInfor />
				</IconContainer>
			</StickyContactContainer>
		</div>
	);
};

export default StickyContact;
