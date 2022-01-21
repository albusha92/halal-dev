import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import SvgEnvelop from '../../../../icon-component/Envelop';
import SvgFacebook from '../../../../icon-component/Facebook';
import SvgPinterest from '../../../../icon-component/Pinterest';
import SvgTwitter from '../../../../icon-component/Twitter';
import { DetailText, HistoryTitle } from '../../../about/views/history/HistoryStyled';
import { Icon, IconContainer } from '../founder-list/FounderListStyled';
import { AvatarCircle, MemberCardItem, MembersContainer, MenberInforContainer, Name, Position } from '../meet-team/MeetTeamStyled';
import { AdvisoryBoardContainer } from './AdvisoryBoardStyled';
import avatar from '../../../../assets/founders/avatar-member.png';

interface IAdvisoryBoardProps {
}

const AdvisoryBoard: React.FunctionComponent<IAdvisoryBoardProps> = (props) => {
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<AdvisoryBoardContainer>
			<HistoryTitle>
				Meet our Advisory Board
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
									</MenberInforContainer>
								</MemberCardItem>
							</Col>
						)
					})}
				</Row>
			</MembersContainer>
		</AdvisoryBoardContainer>
	);
};

export default AdvisoryBoard;
