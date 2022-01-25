import { FounderImage, FounderItemContainer, Icon, IconContainer, InforContainer, NameContainer, Position } from 'features/meet-our-founders/views/founder-list/FounderListStyled';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './AboutInfoStyled';
import founder1 from 'assets/founders/founder1.png';
import { SvgEnvelop, SvgFacebook, SvgPinterest, SvgTwitter } from 'icon-component';
import { Col, Row, Space } from 'antd';
import { DetailBio, Name } from 'features/biography/pages/BiographyStyled';
import { useMediaQuery } from 'react-responsive';
interface IFoundersProps {
}

const founderList = [
	{
		name: "Dr. A. Abas Wani",
		position: "(Founder & CEO)",
		subName: "Ph.D, MBA",
	},
	{
		name: "Philipp Tomio",
		position: "(Founder & CEO)",
		subName: "MA, MBA",
	},
	{
		name: "Ferhat Balyeli,",
		position: "(Founder & CEO)",
		subName: "Ph.D, MBA",
	},

]

const Founders: React.FunctionComponent<IFoundersProps> = (props) => {
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const history = useHistory();
	return (
		<Container>
			<Space direction="vertical" size={60} style={{ width: "100%" }}>
				{founderList.map(item => {
					return (
						<Row justify="center" gutter={lap1440 ? 80 : tablet768 ? 40 : 20}>
							<Col xs={15} sm={6} md={6} xl={5} >
								<FounderItemContainer>
									<FounderImage onClick={() => history.push("/biography")} src={founder1} alt="" />
									<InforContainer>
										<NameContainer
										// onClick={() => history.push("/biography")}
										>
											{item.name}, <span>{item.subName}</span>
										</NameContainer>
										<Position>
											{item.position}
										</Position>
										<IconContainer>
											<Icon>
												<SvgFacebook />
											</Icon>
											<Icon>
												<SvgPinterest />
											</Icon>
											<Icon>
												<SvgTwitter />
											</Icon>
											<Icon>
												<SvgEnvelop color='white' />
											</Icon>
										</IconContainer>
									</InforContainer>
								</FounderItemContainer>
							</Col>
							<Col xs={24} sm={18} md={18} xl={19}>
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
					)
				})}
			</Space>
		</Container>
	);
};

export default Founders;
