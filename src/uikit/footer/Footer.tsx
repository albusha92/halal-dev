import { Select } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dhl from '../../assets/deliveries/dhl.png';
import goHalal from '../../assets/deliveries/go-halal.png';
import hermes from '../../assets/deliveries/hermes.png';
import ups from '../../assets/deliveries/ups.png';
import rating from '../../assets/home-page/rating.png';
import { colors } from '../../config/constants';
import { update_language } from '../../features/home-page/slices/homeSlice';
import SvgCall from '../../icon-component/Call';
import SvgEnvelop from '../../icon-component/Envelop';
import SvgMarker from '../../icon-component/Marker';
import { RootState } from '../../ultils/store';
import { languages } from '../header/TopHeaderMenu';
import { ContactContainer, ContactInfor, ContentContainer, FooterContainer, IconContainer, PartFourContainer, PartOne, PartThree, PartThreeContainer, PartTwo, PartTwoContainer, PhoneNumber, RatingImage, Title } from './FooterStyled';
const { Option } = Select;
interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {

	const [selected, setSelected] = React.useState<string>("DE");
	const onSelect = (code: string): void => setSelected(code);
	const dispatch = useDispatch();
	const { language } = useSelector((state: RootState) => state.home);
	return (
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
							<SvgCall />
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
							<SvgEnvelop />
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
			<PartThree>
				<Title>
					Go Halal Business
				</Title>
				<PartThreeContainer>
					<img src={hermes} alt="" width="100%" />
					<img src={dhl} alt="" width="100%" />
					<img src={ups} alt="" width="70%" />
					<img src={goHalal} alt="" width="70%" />
				</PartThreeContainer>
			</PartThree>
			<PartThree>
				<Title>
					Go Halal Business
				</Title>
				<PartFourContainer>
					<RatingImage src={rating} alt="" width="100%" />
					<ContactContainer>
						<Select
							value={language}
							showArrow={false}
							style={{
								width: 120,
								fontSize: "1rem",
								color: colors.darkGrey,
								padding: 0,
								display: 'flex',
								alignItems: "center",
								justifyContent: "center"
							}} bordered={false}
							onChange={(value) => {
								dispatch(update_language(value))
							}}
						>
							{languages.map(item => {
								return (
									<Option style={{ color: colors.darkGrey, width: 120 }} value={item.value}>
										{item.name} {item.icon}
									</Option>
								)
							})}

						</Select>
					</ContactContainer>
				</PartFourContainer>
			</PartThree>
		</FooterContainer>
	);
};

export default Footer;
