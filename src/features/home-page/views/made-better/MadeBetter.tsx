import { Col, Row } from 'antd';
import * as React from 'react';
import { MadeBetterContainer, MadeBetterTextContainer, PrimaryText, SecondaryText, ThirdText } from './MadeBetterStyled';
import image from '../../../../assets/home-page/made-better.png';
interface IMadeBetterProps {
}

const MadeBetter: React.FunctionComponent<IMadeBetterProps> = (props) => {
	return (
		<MadeBetterContainer>
			<Row>
				<Col span={12}>
					<MadeBetterTextContainer>
						<PrimaryText>
							The Halal you <br />
							love and Trust
						</PrimaryText>
						<SecondaryText>
							made better.
						</SecondaryText>
						<ThirdText>
							Better for the world
						</ThirdText>
					</MadeBetterTextContainer>
				</Col>
				<Col span={12}>
					<img src={image} alt="" width="100%" />
				</Col>
			</Row>
		</MadeBetterContainer>
	);
};

export default MadeBetter;
