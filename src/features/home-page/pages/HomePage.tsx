import * as React from 'react';
import Register from '../../register/Register';
import Certified from '../views/certified/Certified';
import ComingSoon from '../views/coming-soon/ComingSoon';
import Contact from '../views/contact/Contact';
import Discount from '../views/discount/Discount';
import Founder from '../views/founder/Founder';
import MadeBetter from '../views/made-better/MadeBetter';
import MoreDetailHome from '../views/more-detail-home/MoreDetailHome';
import Shipping from '../views/Shipping/Shipping';
import WhyGoHalal from '../views/why-go-halal/WhyGoHalal';
import { HomePageContainer } from './HomPageStyled';
import Footer from '../../../uikit/footer/Footer';
import PaymentFooter from '../views/payment-footer/PaymentFooter';
import HeaderProductFilter from '../../../uikit/header/HeaderProductFilter';
import DeliveryFooter from '../views/delivery-footer/DeliveryFooter';
import Payment from '../views/payment/Payment';
export interface IAppProps {
}

const HomePage = () => {
	return (
		<HomePageContainer>
			<HeaderProductFilter />
			<ComingSoon />
			<WhyGoHalal />
			<Certified />
			<MadeBetter />
			<Founder />
			<Discount />
			<Shipping />
			<Register />
			<MoreDetailHome />
			<Contact />
			<Footer />
			<DeliveryFooter />
			<Payment />
			<PaymentFooter />
		</HomePageContainer>
	);
}

export default HomePage
