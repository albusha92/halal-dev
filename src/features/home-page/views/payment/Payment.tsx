import * as React from 'react';
import { Title } from '../../../../uikit/footer/FooterStyled';
import { PaymentContainer, PaymentImage } from './PaymentStyled';
import visa from '../../../../assets/footer/visa.png';
import visa1 from '../../../../assets/footer/visa1.png';
import discover from '../../../../assets/footer/discover.png';
import dinner from '../../../../assets/footer/dinner.png';
import sofort from '../../../../assets/footer/sofort.png';
import sepa from '../../../../assets/footer/sepa.png';
import payment from '../../../../assets/deliveries/payment.png';
import { Col, Row } from 'antd';
interface IPaymentProps {
}

const Payment: React.FunctionComponent<IPaymentProps> = (props) => {
	return (
		<PaymentContainer>
			<Title>
				Payment Methods
			</Title>
			<PaymentImage>
				<img src={payment} alt="" width="100%" />
				{/* <Row>
					<Col span={4}>
						<PaymentImage src={visa} alt="" />
					</Col>
					<Col span={4}>
						<PaymentImage src={visa1} alt="" />
					</Col>
					<Col span={4}>
						<PaymentImage src={discover} alt="" />
					</Col>
					<Col span={4}>
						<PaymentImage src={dinner} alt="" />
					</Col>
					<Col span={4}>
						<PaymentImage src={sofort} alt="" />
					</Col>
					<Col span={4}>
						<PaymentImage src={sepa} alt="" />
					</Col>
				</Row> */}
			</PaymentImage>
		</PaymentContainer>
	);
};

export default Payment;
