import { Dropdown } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SvgInstagram from '../../icon-component/Instagram';
import { BodyMenuItemModel } from '../../schema/general';
import { RootState } from '../../ultils/store';
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
import { toggle_menu } from '../menuSlice';
import { BodyMenuContainer, BodyMenuItem, BurgerBtn, FollowContainer, FollowTitle, IconMenuWrapper, IconWrapper, MenuIcon, SocialItem, SocialName } from './BodyHeaderStyled';
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
	const { show } = useSelector((state: RootState) => state.mobileMenu);
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
			<BodyMenuItem >
				<Dropdown overlay={<DropdownCart />} placement="bottomCenter" arrow>
					<IconWrapper>
						<SvgAddress />
					</IconWrapper>
				</Dropdown>
				<span>Delivery Address</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<IconWrapper>
					<SvgRecipes />
				</IconWrapper>
				<span>My Recipies</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<IconWrapper>
					<SvgShoppingList />
				</IconWrapper>
				<span>Shopping List</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<IconWrapper>
					<SvgHeart />
				</IconWrapper>
				<span>Favorite</span>
			</BodyMenuItem>
			<BodyMenuItem>

				<IconWrapper>
					<SvgCart />
				</IconWrapper>
				<span>Cart</span>
			</BodyMenuItem>
			<BodyMenuItem>
				<IconWrapper>
					<SvgUser />
				</IconWrapper>
				<span>Account</span>
			</BodyMenuItem>
			<IconMenuWrapper>
				<MenuIcon className={show ? "open" : ""} onClick={() => {
					dispatch(toggle_menu());
				}}>
					<BurgerBtn></BurgerBtn>
				</MenuIcon>
			</IconMenuWrapper>

		</BodyMenuContainer>
	);
};

export default BodyHeaderMenu;
