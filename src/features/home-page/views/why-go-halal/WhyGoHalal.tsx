import { Col, Row } from 'antd';
import * as React from 'react';
import { BoldText, Description, GoHalalText, HightBackgroundText, HightLightText, OutStoryBtn, RightWhyContainer, WhyContainer, WhyTextConatiner } from './WhyGoHalalStyled';

interface IWhyGoHalalProps {
}

const WhyGoHalal: React.FunctionComponent<IWhyGoHalalProps> = (props) => {
	return (
		<WhyContainer>
			<Row>
				<Col span={12}>
					<WhyTextConatiner>
						WHY
					</WhyTextConatiner>
					<GoHalalText>
						Go halal
					</GoHalalText>
				</Col>
				<Col span={12}>
					<RightWhyContainer>
						<Description>
							Our decisions are guided by authentic halal for a <HightLightText>fresh, delicious, nutritious, and hygienic customer experience.</HightLightText> Everything we offer is packed with halal flavor full of joy for an authentic experience.
						</Description>
						<div>
							<HightBackgroundText>
								<BoldText>We are Go Halal</BoldText>&nbsp; - The Halal Food Company Made for You.
							</HightBackgroundText>
						</div>
						<div>
							<OutStoryBtn>
								Our Story
							</OutStoryBtn>
						</div>

					</RightWhyContainer>
				</Col>
			</Row>
		</WhyContainer>
	);
};

export default WhyGoHalal;
