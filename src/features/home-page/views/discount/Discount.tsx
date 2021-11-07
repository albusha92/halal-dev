import { Col, Row } from 'antd';
import * as React from 'react';
import { DiscountContainer } from './DiscountStyled';
import image from '../../../../assets/home-page/discount.png';

interface IDiscountProps {
}

const Discount: React.FunctionComponent<IDiscountProps> = (props) => {
	return (
		<DiscountContainer>
			<img src={image} alt="" width="100%" />
			{/* <Row>
				<Col span={12}>
				</Col>
				<Col span={12}>
					<img src={image} alt="" width="100%" />
				</Col>
			</Row> */}
		</DiscountContainer>
	);
};

export default Discount;
