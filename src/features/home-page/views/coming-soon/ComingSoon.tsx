import * as React from 'react';
import { BigTitle, ComingSoonContainer, ContentWrapper, InputContainer, LogoTrustImage, LogoWrapper, SendEmailContainer, SubscribeNowBtn, Subtitle } from './ComingSoonStyled';
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
						<Input style={{
							backgroundColor: "white",
							borderRadius: "0px",
							width: lap1990 ? "230px" : lap1600 ? "200px" : lap1440 ? "180px" : lap1024 ? "130px" : "100px",
							padding: lap1990 ? "10px 0px 10px 40px" : lap1600 ? "10px 0px 10px 40px" : lap1440 ? "6px 0px 6px 30px" : lap1024 ? "6px 0px 6px 30px" : "6px 0px 6px 30px",
							fontSize: lap1990 ? "24px" : lap1600 ? "22px" : lap1440 ? "20px" : lap1024 ? "14px" : "14px"
						}} placeholder="Email Address" bordered={false} />
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
