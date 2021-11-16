import { Dropdown, Select } from 'antd';
import * as React from 'react';
import { colors } from '../../config/constants';
import { FooterMenuItemModel } from '../../schema/general';
import SvgArrowDown from '../icon-component/ArrowDown';
import SvgArrowRight from '../icon-component/ArrowRight';
import SvgBread from '../icon-component/Bread';
import SvgFrozen from '../icon-component/Frozen';
import SvgFruit from '../icon-component/Fruit';
import SvgMeat from '../icon-component/Meat';
import SvgMilk from '../icon-component/Milk';
import DropdownMenu from '../menu/Menu';
import { FilterContainer, FilterIconContainer, FilterItem, LiItem } from './HeaderProductFilterStyled';
import { MenuFooterContainer } from './HeaderStyled';
const { Option } = Select;

interface IHeaderProductFilterProps {
}

const productFilter: FooterMenuItemModel[] = [
	{
		name: "Fruits & Vegetables",
		icon: <SvgFruit />,
		key: "fruit-vegetables",
		link: "",
	},
	{
		name: "Meat & Poultry",
		icon: <SvgMeat />,
		key: "meat-poultry",
		link: "",
	},
	{
		name: "Milk & Dairy",
		icon: <SvgMilk />,
		key: "milk-dairy",
		link: "",
	},
	{
		name: "Frozen Products",
		icon: <SvgFrozen />,
		key: "frozen-products",
		link: "",
	},
	{
		name: "Bread",
		icon: <SvgBread />,
		key: "bread",
		link: "",
	},
]

const HeaderProductFilter: React.FunctionComponent<IHeaderProductFilterProps> = (props) => {
	const [current, setCurrent] = React.useState<string>('fruit-vegetables');
	return (
		<FilterContainer>
			<MenuFooterContainer>
				<Dropdown overlay={<DropdownMenu />} placement="bottomLeft">
					<li style={{cursor: "pointer"}}>
						<FilterItem style={{ margin: 0 }} chosen={current === 'all'} onClick={() => setCurrent('all')}>
							All category
							<SvgArrowDown style={{fontSize: "12px", marginLeft: "0.5rem"}} />
						</FilterItem>
					</li>
				</Dropdown>
				{productFilter.map(item => {
					return (
						<LiItem key={item.key}>
							<FilterItem chosen={current === item.key} onClick={() => setCurrent(item.key)}>
								<FilterIconContainer>{item.icon}</FilterIconContainer>
								{item.name}
							</FilterItem>
						</LiItem>
					)
				})}
				<li >
					<FilterItem chosen={current === 'see-more'} onClick={() => setCurrent('see-more')}>
						See more
						<SvgArrowRight fontSize=".75rem" style={{ marginLeft: 10 }} />
					</FilterItem>
				</li>
			</MenuFooterContainer>
		</FilterContainer>
	);
};

export default HeaderProductFilter;
