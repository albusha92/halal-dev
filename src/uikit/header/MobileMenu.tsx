import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../ultils/store';
import { footerMenus } from './FooterHeader';
import "./MobileMenu.css";
import { ListMenu, MenuContainer, MenuItemLi, MobileMenuContainer } from './MobileMenuStyled';

interface IMobileMenuProps {
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = (props) => {
	const { show } = useSelector((state: RootState) => state.mobileMenu);
	document.getElementById("memu")
	return (
		show ? (<MobileMenuContainer id={"menu"}>
			<MenuContainer>
				<ListMenu>
					{footerMenus.map(item => {
						return (
							<MenuItemLi key={item.name}>
								{item.name}
							</MenuItemLi>
						)
					})}
					{footerMenus.map(item => {
						return (
							<MenuItemLi key={item.name}>
								{item.name}
							</MenuItemLi>
						)
					})}
					{footerMenus.map(item => {
						return (
							<MenuItemLi key={item.name}>
								{item.name}
							</MenuItemLi>
						)
					})}
				</ListMenu>
			</MenuContainer>
		</MobileMenuContainer>) : null
	);
};

export default MobileMenu;
