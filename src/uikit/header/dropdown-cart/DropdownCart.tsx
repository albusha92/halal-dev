import { Calendar, Input } from 'antd';
import * as React from 'react';
import SvgWallet from '../../../icon-component/Wallet';
import SvgAddress from '../../icon-component/Address';
import SvgCalendar from '../../icon-component/Calendar';
import SvgCar2Dropdown from '../../icon-component/Car2Dropdown';
import SvgCarDropdown from '../../icon-component/CarDropdown';
import SvgEarth from '../../icon-component/Earth';
import SvgFastCar from '../../icon-component/FastCar';
import SvgPickUpDropdown from '../../icon-component/PickUpDropdown';
import SvgPin from '../../icon-component/Pin';
import SvgZipcode from '../../icon-component/Zipcode';
import ChooseFittingHours from './ChooseFittingHours';
import { Address, ButtonConfirm, ButtonContainer, CalendarContainer, Caption, ConfirmDetail, DeliveryCaption, DeliveryContainer, DropdownCartContainer, DropdownHeader, DropdownTab, FastDelivery, HeaderText, InputAddress, InputContainer, InputIcon, InputZipcode, SlideContent, SlideDown, SlideDownItem, TabIcon, TabItem, VrLine, Zipcode } from './DropdownCartStyled';

interface IDropdownCartProps {
}


const useSSNFields = () => {

	return {
		handleChange: (e: any) => {
		}
	};
};


const DropdownCart: React.FunctionComponent<IDropdownCartProps> = (props) => {
	const [currentTab, setCurrentTab] = React.useState<string>('delivery');
	const [open, setOpen] = React.useState<boolean>(false);
	const { handleChange } = useSSNFields();
	const divRef = React.useRef<Input>(null);
	function onPanelChange(value: any, mode: any) {
		console.log(value, mode);
	}


	return (
		<DropdownCartContainer>
			<DropdownHeader>
				<HeaderText>
					Choose Delivery option
				</HeaderText>
				The range differs depending on the selected service
			</DropdownHeader>
			<DropdownTab>
				<TabItem className={currentTab === "delivery" ? "chosen" : ""} onClick={() => setCurrentTab("delivery")}>
					<TabIcon>
						<SvgCarDropdown />
					</TabIcon>
					Delivery
				</TabItem>
				<TabItem className={currentTab === "pickup" ? "chosen" : ""} onClick={() => setCurrentTab("pickup")}>
					<TabIcon>
						<SvgPickUpDropdown />
					</TabIcon>
					Pick up
				</TabItem>
				<TabItem className={currentTab === "drivein" ? "chosen" : ""} onClick={() => setCurrentTab("drivein")}>
					<TabIcon>
						<SvgCar2Dropdown />
					</TabIcon>
					Drive in
				</TabItem>
			</DropdownTab>
			<SlideDown>
				<SlideDownItem onClick={() => setOpen(!open)}>
					1. Pickup Location
				</SlideDownItem>
				<SlideContent className={open ? 'slidedown' : 'slideup'}>
					<Caption>
						Enter your address or zip code to choose a service
					</Caption>
					<Zipcode>
						Zip code
						<InputContainer>
							<InputZipcode>
								<Input ref={divRef} maxLength={1} name="ssn-1" placeholder="0" bordered={false} onChange={handleChange} />
								<VrLine />
								<Input ref={divRef} maxLength={1} name="ssn-2" placeholder="0" bordered={false} onChange={handleChange} />
								<VrLine />
								<Input ref={divRef} maxLength={1} name="ssn-3" placeholder="0" bordered={false} onChange={handleChange} />
								<VrLine />
								<Input ref={divRef} maxLength={1} name="ssn-4" placeholder="0" bordered={false} onChange={handleChange} />
								<VrLine />
								<Input ref={divRef} maxLength={1} name="ssn-5" placeholder="0" bordered={false} onChange={handleChange} />
							</InputZipcode>
							<InputIcon>
								<SvgZipcode />
							</InputIcon>
						</InputContainer>
					</Zipcode>
					<Address>
						Address
						<InputContainer>
							<InputAddress>
								<Input placeholder="Search by address" bordered={false} />
							</InputAddress>
							<InputIcon>
								<SvgPin />
							</InputIcon>
						</InputContainer>
					</Address>
				</SlideContent>
			</SlideDown>
			<SlideDown>
				<SlideDownItem onClick={() => setOpen(!open)}>
					2. Pickup Date
				</SlideDownItem>
				<SlideContent className={open ? 'slidedown' : 'slideup'}>
					<Caption>
						Choose date of your pickup
					</Caption>
					<CalendarContainer>
						<Calendar fullscreen={false} onSelect={(date) => {
							console.log("onSelect", date)
						}} onPanelChange={onPanelChange} />
					</CalendarContainer>
					<Caption>
						Choose fitting hours
					</Caption>
					<ChooseFittingHours />
				</SlideContent>
			</SlideDown>
			<SlideDown>
				<SlideDownItem onClick={() => setOpen(!open)}>
					3. Confirm
				</SlideDownItem>
				<SlideContent className={open ? 'slidedown' : 'slideup'}>
					<ConfirmDetail>
						<SvgAddress /> <span>5101, Bergheim</span>
					</ConfirmDetail>
					<ConfirmDetail>
						<SvgCalendar /> 16.09.2020 | 10:00 - 16:00
					</ConfirmDetail>
					<ConfirmDetail>
						<SvgWallet /> 0,00 €
					</ConfirmDetail>
					<ButtonContainer>
						<ButtonConfirm>
							Confirm
						</ButtonConfirm>
					</ButtonContainer>
				</SlideContent>
			</SlideDown>
			<FastDelivery>
				<SvgFastCar fontSize="2rem" />
				<DeliveryContainer>
					<DeliveryCaption>
						Fast Delivery
					</DeliveryCaption>
					in 1-2 workdays
				</DeliveryContainer>
			</FastDelivery>
			<FastDelivery>
				<SvgEarth fontSize="1.5rem" />
				<DeliveryContainer>
					<DeliveryCaption>
						Sustainability
					</DeliveryCaption>
				</DeliveryContainer>
			</FastDelivery>
		</DropdownCartContainer>
	);
};

export default DropdownCart;
