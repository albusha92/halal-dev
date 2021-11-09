import * as React from 'react';
import { BigTitle, ComingSoonContainer, ContentWrapper, InputContainer, InputWrapper, LogoTrustImage, LogoWrapper, SendEmailContainer, SubscribeNowBtn, Subtitle } from './ComingSoonStyled';
import image from '../../../../assets/home-page/coming-soon.png';
import { Input } from 'antd';
import { useMediaQuery } from 'react-responsive';
import logo from '../../../../assets/home-page/logo-trust.png';

interface IComingSoonProps {
}

const ComingSoon: React.FunctionComponent<IComingSoonProps> = (props) => {
	const lap1990 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });

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
							}} placeholder="Email Address" bordered={false} />
						</InputWrapper>
						<SubscribeNowBtn>
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
