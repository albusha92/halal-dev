import * as React from 'react';
import { LiImage, LiItem, MenuContainer, NameContainer, OlContainer } from './MenuStyled';
import discount from '../../assets/menu/discount.png';
import bag from '../../assets/menu/bag.png';
import leaf from '../../assets/menu/leaf.png';
import cherry from '../../assets/menu/cherry.png';
import meat from '../../assets/menu/meat.png';
import bread from '../../assets/menu/bread.png';
import phomai from '../../assets/menu/phomai.png';
import ice_screem from '../../assets/menu/ice-screem.png';
import savory from '../../assets/menu/savory.png';
import chocolate from '../../assets/menu/chocolate.png';
import fruit from '../../assets/menu/fruit.png';
import local from '../../assets/menu/local.png';
import baby from '../../assets/menu/baby.png';
import beauty from '../../assets/menu/beauty.png';
import drug from '../../assets/menu/drug.png';
import clean from '../../assets/menu/clean.png';
import book from '../../assets/menu/book.png';
import home from '../../assets/menu/home.png';
import game from '../../assets/menu/game.png';
import phone from '../../assets/menu/phone.png';
import dress from '../../assets/menu/dress.png';
import it from '../../assets/menu/it.png';
import toy from '../../assets/menu/toy.png';
import decor from '../../assets/menu/decor.png';

import service from '../../assets/menu/service.png';
import SvgRight from '../icon-component/Right';
import FirstLevelMenu from './FirstLevelMenu';

interface IDropdownMenuProps {
}

export const menus = [
	{
		name: "Discounts & Offers",
		icon: discount
	},
	{
		name: "Our partner sellers",
		icon: bag
	},
	{
		name: "Bio and organic products",
		icon: leaf
	},
	{
		name: "Fruits and vegetables",
		icon: cherry
	},
	{
		name: "Meats, fish & poultry",
		icon: meat
	},
	{
		name: "Breads and pastries",
		icon: bread
	},
	{
		name: "Fresh",
		icon: phomai
	},
	{
		name: "Frozen",
		icon: ice_screem
	},
	{
		name: "Savory groceries",
		icon: savory
	},
	{
		name: "Sweet groceries",
		icon: chocolate
	},
	{
		name: "Beverages",
		icon: fruit
	},
	{
		name: "Local products",
		icon: local
	},
	{
		name: "Baby",
		icon: baby
	},

	{
		name: "Hygiene and Beauty",
		icon: beauty
	},
	{
		name: "Drug store",
		icon: drug
	},
	{
		name: "Maintenance and cleaning",
		icon: clean
	},
	{
		name: "",
		icon: book
	},
	{
		name: "Home appliance",
		icon: home
	},
	{
		name: "Video games and culture",
		icon: game
	},
	{
		name: "Smartphones and ObjectsConnected",
		icon: phone
	},
	{
		name: "Fashion and Luggage",
		icon: dress,
	},
	{
		name: "IT and Office",
		icon: it,
	},
	{
		name: "Toys, Sports and Leisure",
		icon: toy
	},
	{
		name: "Home and Decoration",
		icon: decor
	},
	{
		name: "Services",
		icon: service,
	},

]

const DropdownMenu: React.FunctionComponent<IDropdownMenuProps> = (props) => {
	return (
		<MenuContainer>
			<OlContainer>
				{menus.map((item, idx) => {
					return (
						<LiItem>
							<NameContainer>
								<LiImage>
									<img width="100%" src={item.icon} alt="" />
								</LiImage>
								<span>
									{item.name}
								</span>
							</NameContainer>
							<SvgRight />
							<FirstLevelMenu title={item.name} />
						</LiItem>
					)
				})}
			</OlContainer>
		</MenuContainer>
	);
};

export default DropdownMenu;
