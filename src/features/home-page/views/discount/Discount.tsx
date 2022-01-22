import * as React from 'react';
import image from '../../../../assets/home-page/discount.png';
import { DiscountContainer } from './DiscountStyled';
import PreOrderModal from './PreOrderModal';

interface IDiscountProps {
}

const Discount: React.FunctionComponent<IDiscountProps> = (props) => {
	const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
	return (
		<DiscountContainer>
			<img onClick={() => setVisibleModal(true)} src={image} alt="" width="100%" />
			<PreOrderModal setVisible={setVisibleModal} visible={visibleModal} />
		</DiscountContainer>
	);
};

export default Discount;
