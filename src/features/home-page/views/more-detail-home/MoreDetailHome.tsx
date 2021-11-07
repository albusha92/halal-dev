import * as React from 'react';
import SvgComment from '../../../../icon-component/Comment';
import SvgRepeat from '../../../../icon-component/Repeat';
import SvgRocket from '../../../../icon-component/Rocket';
import SvgTag from '../../../../icon-component/Tag';
import SvgWallet from '../../../../icon-component/Wallet';
import { DetailItemContainer, IconContainer, MoreDetailHomeContainer, SubTitle, Title } from './MoreDetailHomeStyled';

interface IMoreDetailHomeProps {
}

const moreDetails = [
	{
		name: "Free Shipping",
		icon: <SvgRocket />,
		description: "For all orders over 29 EUR",
	},
	{
		name: "Return Policy",
		icon: <SvgRepeat />,
		description: "Cancellation policy available"
	},
	{
		name: "100% Secure Payment",
		icon: <SvgWallet />,
		description: "Gurantee secure payments"
	},
	{
		name: "24/7 Dedicated Support",
		icon: <SvgComment />,
		description: "AnyWhere & anytime"
	},
	{
		name: "Daily Offers",
		icon: <SvgTag />,
		description: "Discount up to 70% OFF"
	},
]

const MoreDetailHome: React.FunctionComponent<IMoreDetailHomeProps> = (props) => {
	return (
		<MoreDetailHomeContainer>
			{moreDetails.map((item, index) => {

				return (
					<DetailItemContainer key={index}>
						<IconContainer>
							{item.icon}
						</IconContainer>
						<Title>
							{item.name}
						</Title>
						<SubTitle>
							{item.description}
						</SubTitle>
					</DetailItemContainer>
				)
			})}

		</MoreDetailHomeContainer>
	);
};

export default MoreDetailHome;
