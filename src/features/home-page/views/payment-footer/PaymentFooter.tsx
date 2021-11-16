import * as React from 'react';
import { CookiesText, LegalText, PaymentContainer, PaymentFooterContainer, PaymentImage } from './PaymentFooterStyled';



interface IPaymentFooterProps {
}
const PaymentFooter: React.FunctionComponent<IPaymentFooterProps> = (props) => {
	return (
		<PaymentFooterContainer>
			<LegalText>
				© 2020  GO Halal , All Rights Reserved.
			</LegalText>
			
			<CookiesText>
				ABG | Impressum | Data Protection | Legal Notice |  Cookies
			</CookiesText>
		</PaymentFooterContainer>
	);
};

export default PaymentFooter;
