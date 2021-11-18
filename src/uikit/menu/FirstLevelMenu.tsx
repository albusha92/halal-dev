import * as React from 'react';
import SvgRight from '../icon-component/Right';
import { FirstLevelMenuContainer, LiItem, MenuTitle } from './FirstLevelMenuStyled';
import { NameContainer, OlContainer } from './MenuStyled';
import SecondLevelMenu from './SecondLevelMenu';

interface IFirstLevelMenuProps {
	title: string;
}

const menus = [
	{
		name: "Made in Germany",
	},
	{
		name: "Covid Protection and Hygiene",
	},
	{
		name: "Beauty & Care",
	},
	{
		name: "Children's corner",
	},
	{
		name: "Organic & Healthy",
	},
	{
		name: "World products",
	},
	{
		name: "Our specialists regions",
	},
	{
		name: "Deli",
	},
	{
		name: "Quality meats",
	},
	{
		name: "Everything for my animal",
	},
	{
		name: "Softs & Brasserie",
	},
	{
		name: "The cave",
	},
	{
		name: "Wonderbox",
	},
]

const FirstLevelMenu: React.FunctionComponent<IFirstLevelMenuProps> = ({ title }) => {
	return (
		<FirstLevelMenuContainer>
			<MenuTitle>{title}</MenuTitle>
			<OlContainer>
				{menus.map((item, idx) => {
					return (
						<LiItem>
							<NameContainer>
								<span>
									{item.name}
								</span>
							</NameContainer>
							<SvgRight />
							<SecondLevelMenu title={item.name} />
						</LiItem>
					)
				})}
			</OlContainer>
		</FirstLevelMenuContainer>
	);
};

export default FirstLevelMenu;
