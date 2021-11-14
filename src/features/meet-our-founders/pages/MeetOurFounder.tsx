import * as React from 'react';
import FounderList from '../views/founder-list/FounderList';
import Introduction from '../views/introduction/Introduction';
import FounderMedia from '../views/media/FounderMedia';
import AdvisoryBoard from '../views/meet-advisory-board/AdvisoryBoard';
import MeetTeam from '../views/meet-team/MeetTeam';
import { MeetOurFounderContainer } from './MeetOurFounderStyled';
import PaymentFooter from '../../home-page/views/payment-footer/PaymentFooter';
import Footer from '../../../uikit/footer/Footer';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';

interface IMeetOurFoundersProps {
}

const MeetOurFounders: React.FunctionComponent<IMeetOurFoundersProps> = (props) => {
	return (
		<MeetOurFounderContainer>
			<StickyContact />
			<Introduction />
			<FounderList />
			<FounderMedia />
			<MeetTeam />
			<AdvisoryBoard />
			<Footer />
			<PaymentFooter />
		</MeetOurFounderContainer>
	);
};

export default MeetOurFounders;
