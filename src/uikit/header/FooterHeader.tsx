import { Menu, Select } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import menu from '../../assets/svg-icon/menu.png';
import { FooterMenuItemModel } from '../../schema/general';
import SvgCashBack from '../icon-component/CashBack';
import SvgDiscount from '../icon-component/Discount';
import SvgDropDown from '../icon-component/DropDown';
import SvgGift from '../icon-component/Gift';
import SvgGoHalal from '../icon-component/GoHalal';
import SvgNewProduct from '../icon-component/NewProduct';
import SvgRecipes from '../icon-component/Recipes';
import { ArrowLeft, ArrowRight, FooterHeaderContainer, IconContainer, MenuFooterContainer, MenuFooterItem, MenuIconContainer, MenuImage, MenuWrapper, RecentlyViewContainer } from './HeaderStyled';

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
	};
	const tablet960 = useMediaQuery({ query: '(max-width: 1010px)' });
	const [showLeft, setShowLeft] = React.useState<boolean>(false);

	return (
		<FooterHeaderContainer>
			{/* <MenuIconContainer >
				<MenuImage src={menu} alt="" />
			</MenuIconContainer> */}
			<MenuWrapper >
				{/* {showLeft && tablet960 && <ArrowLeft onClick={() => {
					setShowLeft(!showLeft);
					let container = document.getElementById('content');
					// let input = document.getElementById('content');
					let scrollAmount = 0;
					let scrollMin = 0
					// let scrollMax = input.clientWidth
					if (container) {
						container.scrollTo({
							top: 0,
							left: Math.max(scrollAmount -= 50),
							behavior: 'smooth'
						});
					}
				}}>P</ArrowLeft>} */}
				<MenuFooterContainer id="content">

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
				{/* {!showLeft && tablet960 && <ArrowRight onClick={() => {
					setShowLeft(!showLeft);
					let container = document.getElementById('content');
					// let input = document.getElementById('content');
					let scrollAmount = 0;
					let scrollMin = 0
					// let scrollMax = input.clientWidth
					if (container) {
						container.scrollTo({
							top: 0,
							left: Math.max(scrollAmount += 50),
							behavior: 'smooth'
						});
					}
				}}>P</ArrowRight>} */}
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
