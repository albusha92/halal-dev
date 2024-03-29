// import { SvgCall } from '@icon-component';
import { SvgCall } from 'icon-component';
import * as React from 'react';
import DeliveryFooter from '../../features/home-page/views/delivery-footer/DeliveryFooter';
import PaymentFooter from '../../features/home-page/views/payment-footer/PaymentFooter';
import Payment from '../../features/home-page/views/payment/Payment';
import SvgEnvelop from '../../icon-component/Envelop';
import SvgMarker from '../../icon-component/Marker';
import { ContactContainer, ContactInfor, ContentContainer, FooterContainer, IconContainer, PartOne, PartTwo, PartTwoContainer, PhoneNumber, Title } from './FooterStyled';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
	return (
		<React.Fragment>
			<FooterContainer>
				<PartOne>
					<Title>
						Go Halal - Your Food & Grocery Shop
					</Title>

					<ContentContainer>
						<div>
							Go Halal is an online marketplace for high quality authentic halal products through a Halal traceability approach that offers transparency, quality and unique experience.
						</div>
						<ContactContainer>
							<IconContainer>
								<SvgCall color='white' />
							</IconContainer>
							<div>
								Hotline (Mo. -Sa. 8 -20 Hrs.)
								<PhoneNumber>(+49) 8161-491651</PhoneNumber>
							</div>
						</ContactContainer>
						<ContactContainer>
							<IconContainer>
								<SvgMarker />
							</IconContainer>
							<div>
								Ganzenmüllerstraße 27
								85354 <br />
								Freising Germany
							</div>
						</ContactContainer>
						<ContactContainer>
							<IconContainer>
								<SvgEnvelop color='white' />
							</IconContainer>
							<div>
								support@gohalalshop.com
							</div>
						</ContactContainer>
					</ContentContainer>

				</PartOne>

				<PartTwo>
					<Title>
						Useful Links
					</Title>

					<PartTwoContainer>
						<ContactInfor>About Us</ContactInfor>
						<ContactInfor>Our Story</ContactInfor>
						<ContactInfor>Our Suppliers</ContactInfor>
						<ContactInfor>Go Halal Family</ContactInfor>
						<ContactInfor>Career</ContactInfor>
						<ContactInfor>Policy</ContactInfor>
						<ContactInfor>Press</ContactInfor>
						<ContactInfor>Social Media</ContactInfor>
						<ContactInfor>Site map</ContactInfor>
					</PartTwoContainer>

				</PartTwo>
				<PartTwo>
					<Title>
						Help Center
					</Title>

					<PartTwoContainer>
						<ContactInfor>Payments</ContactInfor>
						<ContactInfor>Pickup or Shipping</ContactInfor>
						<ContactInfor>Discounts & Offers</ContactInfor>
						<ContactInfor>Products Returns</ContactInfor>
						<ContactInfor>Product Recalls</ContactInfor>
						<ContactInfor>FAQ</ContactInfor>
						<ContactInfor>Checkout</ContactInfor>
						<ContactInfor>Other Issues</ContactInfor>
						<ContactInfor>Contact Us</ContactInfor>
					</PartTwoContainer>
				</PartTwo>
				<PartTwo>
					<Title>
						Go Halal Business
					</Title>

					<PartTwoContainer>
						<ContactInfor>Sell On Go Halal</ContactInfor>
						<ContactInfor>Affiliate Program</ContactInfor>
						<ContactInfor>Our Suppliers</ContactInfor>
						<ContactInfor>Accessibility</ContactInfor>
						<ContactInfor>Advertise With Us</ContactInfor>
					</PartTwoContainer>
				</PartTwo>

			</FooterContainer>
			<DeliveryFooter />
			<Payment />
			<PaymentFooter />
		</React.Fragment>
	);
};

export default Footer;
