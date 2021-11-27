import * as React from 'react';
import payment from '../../../../assets/deliveries/payment.png';
import { Title } from '../../../../uikit/footer/FooterStyled';
import { PaymentContainer, PaymentImage } from './PaymentStyled';
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
			</PaymentImage>
		</PaymentContainer>
	);
};

export default Payment;
