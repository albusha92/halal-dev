import { Dropdown, Select } from 'antd';
import { SvgWallet } from 'icon-component';
import * as React from 'react';
import { Bio, Blog, BoxOpen, CashBag, Recipes, Wallet } from 'uikit/icon-component';
import { FooterMenuItemModel } from '../../schema/general';
import SvgCashBack from '../icon-component/CashBack';
import SvgDiscount from '../icon-component/Discount';
import SvgDropDown from '../icon-component/DropDown';
import SvgGift from '../icon-component/Gift';
import DropdownMenu from '../menu/Menu';
import { FooterHeaderContainer, IconContainer, MenuFooterContainer, MenuFooterItem, MenuWrapper, RecentlyViewContainer } from './HeaderStyled';

const { Option } = Select;

interface IFooterHeaderProps {
}

export const footerMenus: FooterMenuItemModel[] = [
	{
		name: "Bio Products",
		icon: <Bio />,
		key: "bio-products",
		link: "",
	},
	{
		name: "New Products",
		icon: <BoxOpen />,
		key: "new-product",
		link: "",
	},
	{
		name: "Recipes",
		icon: <Recipes />,
		key: "recipes",
		link: "",
	},
	{
		name: "Go Halal Family",
		icon: <Wallet />,
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
		name: "Zakat",
		icon: <CashBag />,
		key: "zakat",
		link: "",
	},
	{
		name: "Blog",
		icon: <Blog />,
		key: "blog",
		link: "",
	},
]

const FooterHeader: React.FunctionComponent<IFooterHeaderProps> = (props) => {
	const [current, setCurrent] = React.useState<string>('');

	return (
		<FooterHeaderContainer>
			<MenuWrapper >
				<MenuFooterContainer id="content">
					<Dropdown overlay={<DropdownMenu />} placement="bottomLeft">
						<li>
							<MenuFooterItem chosen={current === "discount"} onClick={() => setCurrent("discount")}>
								<IconContainer><SvgDiscount /></IconContainer>
								Discounts & Offers
							</MenuFooterItem>
						</li>
					</Dropdown>
					{footerMenus.map(item => {
						return (
							<li key={item.key}>
								<MenuFooterItem chosen={current === item.key} onClick={() => setCurrent(item.key)}>
									<IconContainer>{item.icon}</IconContainer>
									{item.name}
								</MenuFooterItem>
							</li>
						)
					})}
				</MenuFooterContainer>
			</MenuWrapper>
			<RecentlyViewContainer>
				<Select
					defaultValue="recently"
					style={{ color: "#115C07" }}
					suffixIcon={<SvgDropDown color="#115C07" />}
					bordered={false}>
					<Option value="recently">Recently view</Option>
				</Select>
			</RecentlyViewContainer>
		</FooterHeaderContainer>

	);
};

export default FooterHeader;
