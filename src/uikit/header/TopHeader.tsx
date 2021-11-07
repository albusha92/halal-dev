import React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import { FreeShippingContainer, TopHeaderContainer } from './HeaderStyled';
import car from '../../assets/svg-icon/car.svg';
import Rating from './Rating';
import TopHeaderMenu from './TopHeaderMenu';
import { useMediaQuery } from 'react-responsive';
const TopHeader = () => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	return (
		<TopHeaderContainer>
			<FreeShippingContainer>
				<SVGIcon src={car} size={lap1600 ? 25 : lap1440 ? 23 : lap1024 ? 22 : 18} /> <span>Free shipping from 35€</span>
			</FreeShippingContainer>
			<Rating />
			<TopHeaderMenu />
		</TopHeaderContainer>
	);
};

export default TopHeader;