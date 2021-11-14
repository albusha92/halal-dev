import { Col, Row } from 'antd';
import * as React from 'react';
import { BiographyContainer, DetailBio, InformationContainer, Name, Position, Title } from './BiographyStyled';
import avatar from '../../../assets/founders/avatar-bio.png';
import IconContact from '../../../uikit/IconContact';
import { useMediaQuery } from 'react-responsive';
import PaymentFooter from '../../home-page/views/payment-footer/PaymentFooter';
import Footer from '../../../uikit/footer/Footer';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';
interface IBiographyProps {
}

const Biography: React.FunctionComponent<IBiographyProps> = (props) => {
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<BiographyContainer>
			<StickyContact />
			<Title>
				Preeti Wani Biography
			</Title>
			<InformationContainer>
				<Row justify="center" gutter={lap1440 ? 80 : tablet768 ? 40 : 20}>
					<Col span={tablet768 ? 5 : 7}>
						<img width="100%" src={avatar} alt="" />
						<Name>
							Dr. Ali Abas Wani
						</Name>
						<Position>
							(Founder & CEO)
						</Position>
						<Position>
							Food, Innovation & Consumer Enthusiasist
						</Position>
						<IconContact />
					</Col>
					<Col span={tablet768 ? 19 : 17}>
						<Name>
							Biography
						</Name>
						<DetailBio>
							Dr Wani obtained  M. Sc. and Ph.D (Food Science) from leading Indian universities and latter  joined as an Assistant Professor  in  Technical University, Awantipira, Kashmir (2006-2011).Hei joined the Fraunhofer Institute for Process Engineering & Packaging IVV, Germany as a senior scientist and led many R&D projects to develop new foods that prmote health & wellness for consumers (2011-2018). Since then he has become the technical advisor to many food and agrotech industries in Europe, Asia and Miiddle East to help companies develop new products tat promote health, welness, and are sustainable. From 2006 till date, he held several positions, notably as Founder & Editor-in-Chief of Food Packaging & Shelf Life which is a highly reputable journal published by Elsevier Science UK (2014- till date) and Chair of European Hygienic Desgin Group (EHEDG) for regional section India  (September 2015 till date). He has published more than 50 research articles on food processing, quality and hygiene in journals of repute. In January 2019, he joined the Academic Industry International Conventions, Germany as a Senior Business Manager for creating a network of food industry professionas for better innovation in the food industry.
							<br />
							<br />
							In June 2021, Dr . Wani was awarded Master of Business Administration (MBA) jointly by ESSEC & Mannheim Business School. Dr. Wani, Ferhat Balyeli, Anna Kevkivska, Veronika Deffontaine & Phillip laid the foundations of Go Halal during the MBA programme which was supervised by leading universities during the 18 months stay at the two reputed European universities. In July 2021, Dr. Wani joined the Go Halal as the founder along with Philipp Tomio & Ferhat Balyeli.
							<br />
							<br />
							On July 21, 2021, he was appointed as <b>Chief Exceutive Officer (CEO) of the Go Halal.</b>
						</DetailBio>
					</Col>
				</Row>
			</InformationContainer>
			<Footer />
			<PaymentFooter />
		</BiographyContainer>
	);
};

export default Biography;
