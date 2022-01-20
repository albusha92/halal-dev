import { Dropdown } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddressHouse, Heart, SaveArrowDown, ShoppingList } from 'uikit/icon-component';
import SvgInstagram from '../../icon-component/Instagram';
import { RootState } from '../../ultils/store';
import SvgArrowRight from '../icon-component/ArrowRight';
import SvgCart from '../icon-component/Cart';
import SvgFacebookRound from '../icon-component/FacebookRound';
import SvgLike from '../icon-component/Like';
import SvgPrintest from '../icon-component/Printest';
import SvgRecipes from '../icon-component/Recipes';
import SvgYotubeRound from '../icon-component/YotubeRound';
import { toggle_menu } from '../menuSlice';
import { BodyMenuContainer, BodyMenuItem, BurgerBtn, FollowContainer, FollowTitle, IconMenuWrapper, IconWrapper, MenuIcon, SocialItem, SocialName } from './BodyHeaderStyled';
import DropdownCart from './dropdown-cart/DropdownCart';

interface IBodyHeaderMenuProps {
}

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

const items = (
	<FollowContainer>
		<FollowTitle>
			My Items
		</FollowTitle>
		<SocialItem>
			<SocialName>
				<ShoppingList fontSize={20} />
				Shopping list
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
		<SocialItem>
			<SocialName>
				<Heart fontSize={20} />
				Favouries
			</SocialName>
			<SvgArrowRight />
		</SocialItem>
		<SocialItem>
			<SocialName>
				<SaveArrowDown fontSize={20} />
				Save for later
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
				<Dropdown trigger={["click"]} overlay={follow} placement="bottomLeft" arrow>
					<IconWrapper>
						<SvgLike />
					</IconWrapper>
				</Dropdown>
				<span>Follow Us</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<Dropdown overlay={<DropdownCart />} placement="bottomCenter" arrow>
					<IconWrapper>
						<AddressHouse />
					</IconWrapper>
				</Dropdown>
				<span>Address</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<IconWrapper>
					<SvgRecipes />
				</IconWrapper>
				<span>My Recipies</span>
			</BodyMenuItem>
			<BodyMenuItem >
				<Dropdown trigger={["click"]} overlay={items} placement="bottomCenter" arrow>
					<IconWrapper>
						<ShoppingList />
					</IconWrapper>
				</Dropdown>
				<span>My Items</span>
			</BodyMenuItem>
			<BodyMenuItem>
				<IconWrapper>
					<SvgCart />
				</IconWrapper>
				<span>Cart</span>
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
