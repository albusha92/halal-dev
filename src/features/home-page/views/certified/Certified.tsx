import { Col, Row } from 'antd';
import * as React from 'react';
import { CertifiedContainer, CertifiedLogoContainer, EnjoyText, Image, PrimaryText, WhiteBackgroundText, WhiteText } from './CertifiedStyled';
import image from '../../../../assets/home-page/certified-logo.png';
interface ICertifiedProps {
}

const Certified: React.FunctionComponent<ICertifiedProps> = (props) => {
	return (
		<CertifiedContainer>
			<Row>
				<Col span={16}>
					<PrimaryText>
						Certified  Authentic Halal
						<br />
						<WhiteText>Always Made Nutritious, Healthy in a
							Hygienic
							and Safe Environment
						</WhiteText>
					</PrimaryText>
					<EnjoyText>
						Enjoy the Taste - &nbsp;<WhiteBackgroundText>&nbsp; Today, Tommorow and Everyday&nbsp;</WhiteBackgroundText>
					</EnjoyText>
				</Col>
				<Col span={8}>
					<CertifiedLogoContainer>
						<Image src={image} alt="" />
					</CertifiedLogoContainer>
				</Col>
			</Row>
		</CertifiedContainer>
	);
};

export default Certified;
