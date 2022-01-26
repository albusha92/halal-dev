import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { BookOuline, DiamondHandOutline, GroupPeopleOutline, MoutainFlagOutline, UserErrorOutline } from 'uikit/icon-component';
import SvgArrowRight from 'uikit/icon-component/ArrowRight';
import { FollowContainer, FollowTitle, SocialItem, SocialName } from './BodyHeaderStyled';

interface IAboutUsDropdownProps {
	handleVisibleChange: (flag: boolean) => void
}

const AboutUsDropdown: React.FunctionComponent<IAboutUsDropdownProps> = ({ handleVisibleChange }) => {
	const history = useHistory();

	const handleClickItem = (type?: string) => {
		handleVisibleChange(false);
		if (type)
			history.push({
				pathname: '/about-us',
				search: `?type=${type}`
			});
		else {
			history.push('/about-us');
		}
	}

	return (
		<FollowContainer>
			<FollowTitle>
				About Us
			</FollowTitle>
			<SocialItem>
				<SocialName onClick={() => handleClickItem()}>
					<UserErrorOutline fontSize={20} />
					About Us
				</SocialName>
				<SvgArrowRight />
			</SocialItem>
			<SocialItem>
				<SocialName onClick={() => handleClickItem('our-story')}>
					<BookOuline fontSize={20} />
					Out Story
				</SocialName>
				<SvgArrowRight />
			</SocialItem>
			<SocialItem>
				<SocialName onClick={() => handleClickItem('mission-vision')}>
					<MoutainFlagOutline fontSize={20} />
					Mission & Vision
				</SocialName>
				<SvgArrowRight />
			</SocialItem>
			<SocialItem>
				<SocialName onClick={() => handleClickItem('core-values')}>
					<DiamondHandOutline fontSize={20} />
					Core Values
				</SocialName>
				<SvgArrowRight />
			</SocialItem>
			<SocialItem>
				<SocialName onClick={() => handleClickItem('founders')}>
					<GroupPeopleOutline fontSize={20} />
					Our Founders
				</SocialName>
				<SvgArrowRight />
			</SocialItem>
		</FollowContainer>
	);
};

export default AboutUsDropdown;
