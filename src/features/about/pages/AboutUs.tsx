import * as React from 'react';
import PaymentFooter from '../../home-page/views/payment-footer/PaymentFooter';
import Footer from '../../../uikit/footer/Footer';
import Character from '../views/character/Character';
import History from '../views/history/History';
import Infor from '../views/infor/Infor';
import Media from '../views/media/Media';
import TheNumber from '../views/number/TheNumber';
import Press from '../views/press/Press';
import { AboutUsContainer, GreenBackground, HrLine } from './AboutUsStyled';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';

interface IAboutUsProps {
}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
	return (
		<AboutUsContainer>
			<StickyContact />
			<GreenBackground />
			<Infor />
			<HrLine />
			<TheNumber />
			<Character />
			<History />
			<Media />
			<Press />
			<Footer />
			<PaymentFooter />
		</AboutUsContainer>
	);
};

export default AboutUs;
