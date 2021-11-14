import { Col, Row } from 'antd';
import * as React from 'react';
import { DetailText, HistoryTitle } from '../../../about/views/history/HistoryStyled';
import { AvatarCircle, MeetTeamContainer, MemberCardItem, MembersContainer, MenberInforContainer, Name, Position } from './MeetTeamStyled';
import avatar from '../../../../assets/founders/avatar-member.png';
import { Icon, IconContainer } from '../founder-list/FounderListStyled';
import SvgFacebook from '../../../../icon-component/Facebook';
import SvgPinterest from '../../../../icon-component/Pinterest';
import SvgTwitter from '../../../../icon-component/Twitter';
import SvgEnvelop from '../../../../icon-component/Envelop';
import { useMediaQuery } from 'react-responsive';
import IconContact from '../../../../uikit/IconContact';
interface IMeetTeamProps {
}

const MeetTeam: React.FunctionComponent<IMeetTeamProps> = (props) => {
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<MeetTeamContainer>
			<HistoryTitle>
				Meet Our Team
			</HistoryTitle>
			<DetailText>
				Every member of the Farmart team knows that this is more than a job; this mission is essential to our survival because agritech has presented us with a unique opportunity and the possibility to achieve global food security. We are driven to execute and our Technical Field Specialists ensure that small-scale holder farmers in our network perform at an optimum.
			</DetailText>
			<MembersContainer>
				<Row justify="center" gutter={lap1280 ? [60, 60] : tablet768 ? [40, 40] : [10, 10]}>
					{[1, 2, 3, 4, 6, 7, 8, 5].map((item) => {
						return (
							<Col key={item} span={lap1280 ? 5 : tablet768 ? 6 : 8}>
								<MemberCardItem>
									<AvatarCircle alt="" src={avatar} />
									<MenberInforContainer>
										<Name>
											Dr. Ali Abas Wani
										</Name>
										<Position>
											Founder & CEO
										</Position>
										<IconContact />
									</MenberInforContainer>
								</MemberCardItem>
							</Col>
						)
					})}
				</Row>
			</MembersContainer>
		</MeetTeamContainer>
	);
};

export default MeetTeam;
