import * as React from 'react';
import { LiItem, MenuTitle } from './FirstLevelMenuStyled';
import { NameContainer, OlContainer } from './MenuStyled';
import { SecondLevelMenuContainer } from './SecondLevelMenuStyled';

interface ISecondLevelMenuProps {
	title: string;
}

const menus = [
	{
		name: "Savory groceries"
	},
	{
		name: "Sweet groceries"
	},
	{
		name: "Meats & Fish"
	},
	{
		name: "Frozen"
	},
	{
		name: "Drinks"
	},
	{
		name: "Fresh products"
	},
	{
		name: "Fruits and vegetables"
	},
	{
		name: "Hygiene and Beauty"
	},
]

const SecondLevelMenu: React.FunctionComponent<ISecondLevelMenuProps> = ({ title }) => {
	return (
		<SecondLevelMenuContainer>
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
							{/* <SvgRight /> */}
							{/* <SecondLevelMenu title={item.name} /> */}
						</LiItem>
					)
				})}
			</OlContainer>
		</SecondLevelMenuContainer>
	);
};

export default SecondLevelMenu;
