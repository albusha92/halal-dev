import * as React from 'react';
import logo from '../../assets/header/logo.png';
import BodyHeaderMenu from './BodyHeaderMenu';
import { BodyHeaderWrapper, HeaderLogo, LogoImage } from './BodyHeaderStyled';
import HalalSearch from './HalalSearch';

interface IBodyHeaderProps {
}

const BodyHeader: React.FunctionComponent<IBodyHeaderProps> = (props) => {

	return (
		<BodyHeaderWrapper>
			<HeaderLogo>
				<LogoImage src={logo} alt="" />
			</HeaderLogo>
			<HalalSearch />
			<BodyHeaderMenu />
		</BodyHeaderWrapper>
	);
};

export default BodyHeader;
