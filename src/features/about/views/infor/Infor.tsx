import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { AboutText, Caption, ContentText, ExplainText, InforConent, InforContainer, InforTextContainer, ItemTitle, ProductionContainer, ProductionItemContainer } from './InforStyled';

interface IInforProps {
}

const inforList = [
	{
		title: "STRATEGY",
		caption: "Brand Strategy & Art Direction",
		detail: "Creating a higher spacing and how people move through a unique and impactful campaign.",
	},
	{
		title: "DESIGN",
		caption: "UX/UI Design & Website/App Design",
		detail: "Get a regulatory oneven an enterprises such she and the got the did attributing and pushed.",
	},
	{
		title: "PRODUCTION",
		caption: "Typography & Video Production",
		detail: "Spaces of each debt in the digital world can help you with overall simplest authentic.",
	},
	{
		title: "CAMPAIGNS",
		caption: "Marketing Campaigns & Content Creation",
		detail: "Making an email campaings to achieve a real impact.",
	},
]

const Infor: React.FunctionComponent<IInforProps> = (props) => {
	const lap1990 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	return (
		<InforContainer>
			<InforConent>
				<Row>
					<Col xs={24} sm={12}>
						<InforTextContainer>
							<AboutText>
								About Go Halal
							</AboutText>
							<ExplainText>
								We help to create strategies, design & development.
							</ExplainText>
						</InforTextContainer>
					</Col>
					<Col xs={24} sm={12}>
						<ProductionContainer>
							<Row gutter={lap1990 ? [50, 50] : lap1600 ? [90, 70] : lap1440 ? [90, 70] : lap1280 ? [50, 50] : lap1024 ? [40, 40] : [20, 20]}>
								{inforList.map((item, idx) => {

									return (
										<Col key={idx} span={12}>
											<ProductionItemContainer>
												<ItemTitle>
													{item.title}
												</ItemTitle>
												<Caption>
													{item.caption}
												</Caption>
												<ContentText>
													{item.detail}
												</ContentText>
											</ProductionItemContainer>
										</Col>
									)
								})}
							</Row>
						</ProductionContainer>
					</Col>
				</Row>
			</InforConent>
		</InforContainer >
	);
};

export default Infor;
