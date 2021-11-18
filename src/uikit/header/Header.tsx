import * as React from 'react';
import BodyHeader from './BodyHeader';
import DropdownCart from './dropdown-cart/DropdownCart';
import FooterHeader from './FooterHeader';
import HeaderProductFilter from './HeaderProductFilter';
import { HeaderContainer } from './HeaderStyled';
import MobileMenu from './MobileMenu';
import TopHeader from './TopHeader';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<HeaderContainer>
			<MobileMenu />
			<TopHeader />
			<BodyHeader />
			{/* <DropdownCart /> */}
			<FooterHeader />
		</HeaderContainer>
	);
};

export default Header;
