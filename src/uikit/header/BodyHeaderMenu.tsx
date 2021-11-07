import * as React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import { BodyMenuContainer, BodyMenuItem } from './BodyHeaderStyled';
import like from '../../assets/svg-icon/like.svg';
import map from '../../assets/svg-icon/address.svg';
import recipes from '../../assets/svg-icon/recipes.svg';
import shoppingList from '../../assets/svg-icon/shopping-list.svg';
import heart from '../../assets/svg-icon/heart.svg';
import cart from '../../assets/svg-icon/cart.svg';
import userBlack from '../../assets/svg-icon/user-black.svg';
import { BodyMenuItemModel } from '../../schema/general';
import { useMediaQuery } from 'react-responsive';

interface IBodyHeaderMenuProps {
}

const bodyMenuItems: BodyMenuItemModel[] = [
	{
		icon: like,
		name: "Follow Us",
		link: ""
	},
	{
		icon: map,
		name: "Delivery Address",
		link: ""
	},
	{
		icon: recipes,
		name: "My Recipies",
		link: ""
	},
	{
		icon: shoppingList,
		name: "Shopping List",
		link: ""
	},
	{
		icon: heart,
		name: "Favorite",
		link: ""
	},
	{
		icon: cart,
		name: "Cart",
		link: ""
	},
	{
		icon: userBlack,
		name: "Accout",
		link: ""
	},
]

const BodyHeaderMenu: React.FunctionComponent<IBodyHeaderMenuProps> = (props) => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });

	return (
		<BodyMenuContainer>
			{bodyMenuItems.map((item, idx) => {
				return (
					<BodyMenuItem key={idx}>
						<SVGIcon src={item.icon} size={lap1600 ? 30 : lap1440 ? 23 : lap1024 ? 22 : 18} />
						<span>{item.name}</span>
					</BodyMenuItem>
				);
			})}
		</BodyMenuContainer>
	);
};

export default BodyHeaderMenu;
