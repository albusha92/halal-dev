import { Space } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import term from '../../../assets/term/banner.png';
import StickyContact from '../../../uikit/sticky-contact/StickyContact';
import { RootState } from '../../../ultils/store';
import PaymentFooter from '../../home-page/views/payment-footer/PaymentFooter';
import TermItem from '../views/term-item/TermItem';
import { BodyContainer, GeneralHeaderTitle, GeneralTerm, HeaderTitle, Path, TermContainer, TermDescription, TermOfUse } from './TermStyled';

interface ITermProps {
}

const Term: React.FunctionComponent<ITermProps> = (props) => {
	const { terms, conditions } = useSelector((state: RootState) => state.term);

	return (
		<TermContainer>
			<StickyContact />
			<img src={term} alt="" width="100%" />
			<BodyContainer>
				<Path>
					{'Home >'} <span>General terms and conditions online shop</span>
				</Path>
				<TermOfUse>
					<HeaderTitle>
						Terms of use Go Halal
					</HeaderTitle>
					<TermDescription>
						Lidl Stiftung & Co. KG, Stiftbergstrasse 1, 74167 Neckarsulm (hereinafter operator), offers you (hereinafter user) the option of using the online service "My Lidl" (hereinafter My Lidl or Dienst) as a uniform access to numerous online offers from Lidl Group (hereinafter offers). This is a so-called single sign-on service, through which users can use several offers (e.g. online shops, booking portals, etc.) from different companies with uniform log-in data.
					</TermDescription>

					<Space direction="vertical" style={{ width: "100%", marginTop: "1rem" }}>
						{terms.map(item => {
							return <TermItem item={item} />
						})}
					</Space>
				</TermOfUse>
				<GeneralTerm>
					<GeneralHeaderTitle>
						General Terms and Conditions online shop
					</GeneralHeaderTitle>
					<TermDescription>
						Lidl Digital International GmbH & Co. KG, Rötelstrasse 30, 74166 Neckarsulm, operates the online shop at www.lidl.de. The order of goods in the same takes place in accordance with the following regulations.
					</TermDescription>

					<Space direction="vertical" style={{ width: "100%", marginTop: "1rem" }}>
						{conditions.map(item => {
							return <TermItem item={item} />
						})}
					</Space>
				</GeneralTerm>
			</BodyContainer>
			<PaymentFooter />
		</TermContainer>
	);
};

export default Term;
