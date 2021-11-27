import * as React from 'react';
import image from '../../../../assets/home-page/discount.png';
import { DiscountContainer } from './DiscountStyled';

interface IDiscountProps {
}

const Discount: React.FunctionComponent<IDiscountProps> = (props) => {
	return (
		<DiscountContainer>
			<img src={image} alt="" width="100%" />
		</DiscountContainer>
	);
};

export default Discount;
