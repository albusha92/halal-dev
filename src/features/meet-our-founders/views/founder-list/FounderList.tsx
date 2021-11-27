import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import founder1 from '../../../../assets/founders/founder1.png';
import SvgEnvelop from '../../../../icon-component/Envelop';
import SvgFacebook from '../../../../icon-component/Facebook';
import SvgPinterest from '../../../../icon-component/Pinterest';
import SvgTwitter from '../../../../icon-component/Twitter';
import { FounderImage, FounderItemContainer, FoundersContainer, Icon, IconContainer, InforContainer, NameContainer, Position } from './FounderListStyled';
interface IFounderListProps {
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

const FounderList: React.FunctionComponent<IFounderListProps> = (props) => {
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const history = useHistory();
	return (
		<FoundersContainer>
			<Row justify="center" gutter={lap1440 ? 120 : lap1280 ? 80 : tablet768 ? 60 : 20}>
				{founderList.map((item, idx) => {
					return (
						<Col span={lap1280 ? 5 : tablet768 ? 6 : 7}>
							<FounderItemContainer>
								<FounderImage src={founder1} alt="" />
								<InforContainer>
									<NameContainer onClick={() => history.push("/biography")}>
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
											<SvgEnvelop />
										</Icon>
									</IconContainer>
								</InforContainer>
							</FounderItemContainer>
						</Col>
					);
				})}
			</Row>
		</FoundersContainer >
	);
};

export default FounderList;
