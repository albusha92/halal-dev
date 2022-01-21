import * as React from 'react';
import { Icon, IconContainer } from '../features/meet-our-founders/views/founder-list/FounderListStyled';
import SvgEnvelop from '../icon-component/Envelop';
import SvgFacebook from '../icon-component/Facebook';
import SvgPinterest from '../icon-component/Pinterest';
import SvgTwitter from '../icon-component/Twitter';

interface IIconContactProps {
}

const IconContact: React.FunctionComponent<IIconContactProps> = (props) => {
	return (
		<IconContainer>
			<Icon>
				<SvgFacebook />
			</Icon>
			<Icon>
				<SvgPinterest />
			</Icon>
			<Icon>
				<SvgTwitter />
			</Icon>
			<Icon>
				<SvgEnvelop color='white' />
			</Icon>
		</IconContainer>
	);
};

export default IconContact;
