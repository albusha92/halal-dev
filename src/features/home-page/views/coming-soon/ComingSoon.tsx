import { Input } from 'antd';
import * as React from 'react';
import coming from '../../../../assets/home-page/coming.png';
import logo from '../../../../assets/home-page/logo-trust.png';
import { BigTitle, ComingSoonContainer, ContentWrapper, InputContainer, InputWrapper, LogoTrustImage, LogoWrapper, SubscribeNowBtn, Subtitle } from './ComingSoonStyled';

interface IComingSoonProps {
}

const ComingSoon: React.FunctionComponent<IComingSoonProps> = (props) => {
	const [placehoder, setPlacehoder] = React.useState<string>("Email Adress");

	return (
		<ComingSoonContainer>
			<img src={coming} width="100%" alt="" />
			<ContentWrapper>
				<BigTitle>
					Get notified when
					<br />
					site goes live
				</BigTitle>

				<Subtitle>
					In the meantime, please take a moment to read our story and subscribe to our e-mail alerts.<br /> We will keep you updated on our services and offers.
				</Subtitle>
				<InputContainer>
					<InputWrapper>
						<Input style={{
						}} placeholder={placehoder} bordered={false} />
					</InputWrapper>
					<SubscribeNowBtn onClick={() => setPlacehoder("Thank for your subscribe")}>
						Subscribe now
					</SubscribeNowBtn>
				</InputContainer>
			</ContentWrapper>

			<LogoWrapper>
				<LogoTrustImage src={logo} alt="" />
			</LogoWrapper>
		</ComingSoonContainer>
	);
};

export default ComingSoon;
