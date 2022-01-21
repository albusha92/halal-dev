// import { SvgFacebook, SvgInstagram, SvgPhone, SvgPinterest, SvgTwitter, SvgYoutube } from '@icon-component';
import { Input } from 'antd';
import { SvgEnvelop, SvgFacebook, SvgInstagram, SvgPhone, SvgPinterest, SvgTwitter, SvgYoutube } from 'icon-component';
import * as React from 'react';
import { ContactArea, ContactContainer, IconContainer, IconWrapper, InputContainer, InputWrapper, PhoneContainer, RegisterButton, RegisterContainer, RegisterTextContainer } from './ContactStyled';

interface IContactProps {
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
	return (
		<ContactContainer>
			<RegisterContainer>
				<RegisterTextContainer>
					<IconContainer>
						<SvgEnvelop color='white' />
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
