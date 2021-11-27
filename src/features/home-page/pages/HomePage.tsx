import * as React from 'react';
import Footer from '../../../uikit/footer/Footer';
import HeaderProductFilter from '../../../uikit/header/HeaderProductFilter';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';
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
export interface IAppProps {
}

const HomePage = () => {
	return (
		<HomePageContainer>
			<HeaderProductFilter />
			<StickyContact />
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
		</HomePageContainer>
	);
}

export default HomePage
