import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import founder1 from '../../../../assets/home-page/co-founder1.png';
import founder2 from '../../../../assets/home-page/co-founder2.png';
import founder3 from '../../../../assets/home-page/co-founder3.png';
import { FounderBackground, FounderContainer, FounderText } from './FounderStyled';

interface IFounderProps {
}

const Founder: React.FunctionComponent<IFounderProps> = (props) => {
	const lap1990 = useMediaQuery({ query: '(min-width: 1920px)' });
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const history = useHistory();
	return (
		<FounderContainer>
			<FounderBackground />
			<FounderText>
				our founders
			</FounderText>
			<Row justify="center" gutter={lap1990 ? 160 : lap1600 ? 160 : lap1440 ? 140 : lap1024 ? 100 : tablet768 ? 60 : 20}>
				<Col span={lap1990 ? 5 : lap1600 ? 6 : lap1440 ? 6 : lap1024 ? 6 : 6}>
					<img style={{ cursor: "pointer" }} onClick={() => history.push({
						pathname: '/about-us',
						search: `?type=founders`
					})} src={founder1} alt="" width="100%" />
				</Col>
				<Col span={lap1990 ? 5 : lap1600 ? 6 : lap1440 ? 6 : lap1024 ? 6 : 6}>
					<img style={{ cursor: "pointer" }} onClick={() => history.push({
						pathname: '/about-us',
						search: `?type=founders`
					})} src={founder2} alt="" width="100%" />
				</Col>
				<Col span={lap1990 ? 5 : lap1600 ? 6 : lap1440 ? 6 : lap1024 ? 6 : 6}>
					<img style={{ cursor: "pointer" }} onClick={() => history.push({
						pathname: '/about-us',
						search: `?type=founders`
					})} src={founder3} alt="" width="100%" />
				</Col>
			</Row>
		</FounderContainer>
	);
};

export default Founder;
