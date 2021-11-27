import { Input } from 'antd';
import * as React from 'react';
import SvgEnvelop from '../../../../icon-component/Envelop';
import SvgFacebook from '../../../../icon-component/Facebook';
import SvgInstagram from '../../../../icon-component/Instagram';
import SvgPhone from '../../../../icon-component/Phone';
import SvgPinterest from '../../../../icon-component/Pinterest';
import SvgTwitter from '../../../../icon-component/Twitter';
import SvgYoutube from '../../../../icon-component/Youtube';
import { ContactArea, ContactContainer, IconContainer, IconWrapper, InputContainer, InputWrapper, PhoneContainer, RegisterButton, RegisterContainer, RegisterTextContainer } from './ContactStyled';

interface IContactProps {
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
	return (
		<ContactContainer>
			<RegisterContainer>
				<RegisterTextContainer>
					<IconContainer>
						<SvgEnvelop />
					</IconContainer>
					Register for Updates
				</RegisterTextContainer>
				<InputContainer>
					<InputWrapper>
						<Input style={{

						}} placeholder="Your E-mail Address..." />
					</InputWrapper>
					<div>
						<RegisterButton>
							Register Now
						</RegisterButton>
					</div>
				</InputContainer>
			</RegisterContainer>
			<ContactArea>
				<IconWrapper>
					<SvgFacebook />
					<SvgTwitter />
					<SvgPinterest />
					<SvgYoutube />
					<SvgInstagram />
				</IconWrapper>
				<PhoneContainer>
					<SvgPhone /> Mobile Apps
				</PhoneContainer>
			</ContactArea>
		</ContactContainer>
	);
};

export default Contact;
