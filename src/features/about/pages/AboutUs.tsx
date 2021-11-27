import * as React from 'react';
import Footer from '../../../uikit/footer/Footer';
import HeaderProductFilter from '../../../uikit/header/HeaderProductFilter';
import Hrline from '../../../uikit/Hrline';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';
import AboutInfor from '../views/about-info/AboutInfor';
import AboutHeader from '../views/header/AboutHeader';
import { AboutUsContainer } from './AboutUsStyled';

interface IAboutUsProps {
}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
	return (
		<AboutUsContainer>
			<Hrline />
			<HeaderProductFilter />
			<StickyContact />
			<AboutHeader />
			<AboutInfor />
			<Footer />
		</AboutUsContainer>
	);
};

export default AboutUs;
