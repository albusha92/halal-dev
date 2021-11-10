import * as React from 'react';
import { CookiesText, LegalText, PaymentContainer, PaymentFooterContainer, PaymentImage } from './PaymentFooterStyled';
import visa from '../../../../assets/footer/visa.png';
import visa1 from '../../../../assets/footer/visa1.png';
import discover from '../../../../assets/footer/discover.png';
import dinner from '../../../../assets/footer/dinner.png';
import sofort from '../../../../assets/footer/sofort.png';
import sepa from '../../../../assets/footer/sepa.png';


interface IPaymentFooterProps {
}
const PaymentFooter: React.FunctionComponent<IPaymentFooterProps> = (props) => {
	return (
		<PaymentFooterContainer>
			<LegalText>
				© 2020  GO Halal , All Rights Reserved.
			</LegalText>
			<PaymentContainer>
				<PaymentImage src={visa} alt="" />
				<PaymentImage src={visa1} alt="" />
				<PaymentImage src={discover} alt="" />
				<PaymentImage src={dinner} alt="" />
				<PaymentImage src={sofort} alt="" />
				<PaymentImage src={sepa} alt="" />
			</PaymentContainer>
			<CookiesText>
				ABG | Impressum | Data Protection | Legal Notice |  Cookies
			</CookiesText>
		</PaymentFooterContainer>
	);
};

export default PaymentFooter;
