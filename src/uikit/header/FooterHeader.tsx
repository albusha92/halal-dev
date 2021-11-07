import { Menu, Select } from 'antd';
import * as React from 'react';
import menu from '../../assets/svg-icon/menu.png';
import { FooterMenuItemModel } from '../../schema/general';
import SvgCashBack from '../icon-component/CashBack';
import SvgDiscount from '../icon-component/Discount';
import SvgDropDown from '../icon-component/DropDown';
import SvgGift from '../icon-component/Gift';
import SvgGoHalal from '../icon-component/GoHalal';
import SvgNewProduct from '../icon-component/NewProduct';
import SvgRecipes from '../icon-component/Recipes';
import { FooterHeaderContainer, IconContainer, MenuFooterContainer, MenuIconContainer, MenuImage, RecentlyViewContainer } from './HeaderStyled';

const { Option } = Select;

interface IFooterHeaderProps {
}

const footerMenus: FooterMenuItemModel[] = [
	{
		name: "Discounts & Offers",
		icon: <SvgDiscount />,
		key: "discount",
		link: "",
	},
	{
		name: "Recipes",
		icon: <SvgRecipes />,
		key: "recipes",
		link: "",
	},
	{
		name: "New Products",
		icon: <SvgNewProduct />,
		key: "new-product",
		link: "",
	},
	{
		name: "Go Halal Family",
		icon: <SvgGoHalal />,
		key: "go-halal-family",
		link: "",
	},
	{
		name: "Gift Cards",
		icon: <SvgGift />,
		key: "gift-cards",
		link: "",
	},
	{
		name: "Zakat or Cashback",
		icon: <SvgCashBack />,
		key: "cash-back",
		link: "",
	},
]

const FooterHeader: React.FunctionComponent<IFooterHeaderProps> = (props) => {
	const [current, setCurrent] = React.useState<string>('discount');
	const handleClick = (e: any) => {
		setCurrent(e.key);
	}

	return (
		<FooterHeaderContainer>
			<MenuIconContainer >
				<MenuImage src={menu} alt="" />
			</MenuIconContainer>
			<MenuFooterContainer>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
					{footerMenus.map(item => {

						return (
							<Menu.Item key={item.key} icon={<IconContainer>{item.icon}</IconContainer>}>
								{item.name}
							</Menu.Item>
						)
					})}
				</Menu>
			</MenuFooterContainer>
			<RecentlyViewContainer>
				<Select 
				defaultValue="recently" 
				style={{color: "#115C07"  }} 
				suffixIcon={<SvgDropDown color="#115C07" />}
				bordered={false}>
					<Option value="recently">Recently view</Option>
				</Select>
			</RecentlyViewContainer>
		</FooterHeaderContainer>

	);
};

export default FooterHeader;
