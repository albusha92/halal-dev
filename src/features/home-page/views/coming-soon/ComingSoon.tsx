import * as React from 'react';
import { BigTitle, ComingSoonContainer, ContentWrapper, InputContainer, InputWrapper, LogoTrustImage, LogoWrapper, SendEmailContainer, SubscribeNowBtn, Subtitle } from './ComingSoonStyled';
import image from '../../../../assets/home-page/coming-soon.png';
import { Input } from 'antd';
import { useMediaQuery } from 'react-responsive';
import logo from '../../../../assets/home-page/logo-trust.png';

interface IComingSoonProps {
}

const ComingSoon: React.FunctionComponent<IComingSoonProps> = (props) => {
	const [placehoder, setPlacehoder] = React.useState<string>("Email Adress");
	
	return (
		<ComingSoonContainer>
			<img src={image} width="100%" alt="" />
			<ContentWrapper>
				<BigTitle>
					Get notified when
				</BigTitle>
				<SendEmailContainer>
					<BigTitle>
						site goes live
					</BigTitle>
					<InputContainer>
						<InputWrapper>
							<Input style={{
							}} placeholder={placehoder} bordered={false} />
						</InputWrapper>
						<SubscribeNowBtn onClick={() => setPlacehoder("Thank for your subscribe")}>
							Subscribe now
						</SubscribeNowBtn>
					</InputContainer>
				</SendEmailContainer>

				<Subtitle>
					In the meantime, please take a moment to read our story and subscribe to our e-mail alerts.<br /> We will keep you updated on our services and offers.
				</Subtitle>
			</ContentWrapper>
			<LogoWrapper>
				<LogoTrustImage src={logo} alt="" />
			</LogoWrapper>
		</ComingSoonContainer>
	);
};

export default ComingSoon;
