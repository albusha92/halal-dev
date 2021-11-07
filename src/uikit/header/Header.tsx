import * as React from 'react';
import BodyHeader from './BodyHeader';
import FooterHeader from './FooterHeader';
import HeaderProductFilter from './HeaderProductFilter';
import { HeaderContainer } from './HeaderStyled';
import TopHeader from './TopHeader';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<HeaderContainer>
			<TopHeader />
			<BodyHeader />
			<FooterHeader />
			<HeaderProductFilter />
		</HeaderContainer>
	);
};

export default Header;
