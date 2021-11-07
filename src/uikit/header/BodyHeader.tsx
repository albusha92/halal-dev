import * as React from 'react';
import logo from '../../assets/header/logo.png';
import BodyHeaderMenu from './BodyHeaderMenu';
import { BodyHeaderContainer, LogoImage } from './BodyHeaderStyled';
import HalalSearch from './HalalSearch';

interface IBodyHeaderProps {
}

const BodyHeader: React.FunctionComponent<IBodyHeaderProps> = (props) => {

	return (
		<BodyHeaderContainer>
			<LogoImage src={logo} alt="" />
			<HalalSearch />
			<BodyHeaderMenu />
		</BodyHeaderContainer>
	);
};

export default BodyHeader;
