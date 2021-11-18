import { Dropdown } from 'antd';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import SvgInstagram from '../../icon-component/Instagram';
import { BodyMenuItemModel } from '../../schema/general';
import SvgAddress from '../icon-component/Address';
import SvgArrowRight from '../icon-component/ArrowRight';
import SvgCart from '../icon-component/Cart';
import SvgFacebookRound from '../icon-component/FacebookRound';
import SvgHeart from '../icon-component/Heart';
import SvgLike from '../icon-component/Like';
import SvgPrintest from '../icon-component/Printest';
import SvgRecipes from '../icon-component/Recipes';
import SvgShoppingList from '../icon-component/ShoppingList';
import SvgUser from '../icon-component/User';
import SvgYotubeRound from '../icon-component/YotubeRound';
import DropdownMenu from '../menu/Menu';
import { toggle_menu } from '../menuSlice';
import { BodyMenuContainer, BodyMenuItem, FollowContainer, FollowTitle, IconMenuWrapper, IconWrapper, MenuIcon, SocialItem, SocialName } from './BodyHeaderStyled';
import DropdownCart from './dropdown-cart/DropdownCart';

interface IBodyHeaderMenuProps {
}

const bodyMenuItems: BodyMenuItemModel[] = [
	{
		icon: <SvgAddress />,
		name: "Delivery Address",
		link: ""
	},
	{
		icon: <SvgRecipes />,
		name: "My Recipies",
		link: ""
	},
	{
		icon: <SvgShoppingList />,
		name: "Shopping List",
		link: ""
	},
	{
		icon: <SvgHeart />,
		name: "Favorite",
		link: ""
	},
]

const follow = (
	<FollowContainer>
		<FollowTitle>
			Social Media
		</FollowTitle>
		<SocialItem>
			<SocialName>
				<SvgFacebookRound fontSize={20} />
				Facebook
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
		<SocialItem>
			<SocialName>
				<SvgInstagram fontSize={20} />
				Instagram
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
		<SocialItem>
			<SocialName>
				<SvgYotubeRound fontSize={20} />
				Youtube
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
		<SocialItem>
			<SocialName>
				<SvgPrintest fontSize={20} />
				Pinterest
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
	</FollowContainer>
)

const BodyHeaderMenu: React.FunctionComponent<IBodyHeaderMenuProps> = (props) => {
	const dispatch = useDispatch();
	return (
		<BodyMenuContainer>
			<BodyMenuItem>
				<Dropdown overlay={follow} placement="bottomLeft" arrow>
					<IconWrapper>
						<SvgLike />
					</IconWrapper>
				</Dropdown>
				<span>Follow Us</span>
			</BodyMenuItem>
			{bodyMenuItems.map((item, idx) => {
				return (
					<BodyMenuItem key={idx}>
						<IconWrapper>
							{item.icon}
						</IconWrapper>
						<span>{item.name}</span>
					</BodyMenuItem>
				);
			})}
			<BodyMenuItem>
				<Dropdown overlay={<DropdownCart />} placement="bottomCenter" arrow>
					<IconWrapper>
						<SvgCart />
					</IconWrapper>
				</Dropdown>
				<span>Cart</span>
			</BodyMenuItem>
			<BodyMenuItem>
				<IconWrapper>
					<SvgUser />
				</IconWrapper>
				<span>Account</span>
			</BodyMenuItem>
			<IconMenuWrapper>
				<MenuIcon onClick={() => {
					dispatch(toggle_menu());
				}}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</MenuIcon>
			</IconMenuWrapper>

		</BodyMenuContainer>
	);
};

export default BodyHeaderMenu;
