import * as React from 'react';
import { BodyMenuItemModel } from '../../schema/general';
import SvgAddress from '../icon-component/Address';
import SvgCart from '../icon-component/Cart';
import SvgHeart from '../icon-component/Heart';
import SvgLike from '../icon-component/Like';
import SvgRecipes from '../icon-component/Recipes';
import SvgShoppingList from '../icon-component/ShoppingList';
import SvgUser from '../icon-component/User';
import { BodyMenuContainer, BodyMenuItem, IconWrapper } from './BodyHeaderStyled';

interface IBodyHeaderMenuProps {
}

const bodyMenuItems: BodyMenuItemModel[] = [
	{
		icon: <SvgLike />,
		name: "Follow Us",
		link: ""
	},
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
	{
		icon: <SvgCart />,
		name: "Cart",
		link: ""
	},
	{
		icon: <SvgUser />,
		name: "Accout",
		link: ""
	},
]

const BodyHeaderMenu: React.FunctionComponent<IBodyHeaderMenuProps> = (props) => {

	return (
		<BodyMenuContainer>
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
		</BodyMenuContainer>
	);
};

export default BodyHeaderMenu;
