import { Checkbox, Col, Form, Input, Row } from 'antd';
import { CheckboxContainer, NotifyButton } from 'features/register/RegisterStyled';
import { SvgMarker } from 'icon-component';
import * as React from 'react';
import { InputContainer, InputIcon, InputZipcode, VrLine } from 'uikit/header/dropdown-cart/DropdownCartStyled';
import { AddressHouse, GgMapOutline } from 'uikit/icon-component';
import SvgZipcode from 'uikit/icon-component/Zipcode';
import { PreOrderCheckboxText } from '../discount/PreOrderModalStyled';
import { DeliveryAddressContainer, FindLocationButton, InputHorizontal, WelcomeGuestFormContainer } from './WelcomeGuestModalStyled';

interface IWelcomeGuestFormProps {
	closeModal: () => void;
}
const useSSNFields = () => {

	return {
		handleChange: (e: any) => {
		}
	};
};

const WelcomeGuestForm: React.FunctionComponent<IWelcomeGuestFormProps> = ({ closeModal }) => {
	const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
	const { handleChange } = useSSNFields();
	const divRef = React.useRef<Input>(null);
	return (
		<WelcomeGuestFormContainer>
			<Form
				name="pre-order"
				onFinish={() => { }}
				onFinishFailed={() => { }}
				autoComplete="off"
			>
				<Row justify="center" gutter={30}>

					<Col xs={24} md={12}>
						<Form.Item
							name="first_name"
						>

							<Input style={{
							}} placeholder="First Name" />

						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item
							name="last_name"
						>

							<Input style={{
							}} placeholder="Last Name" />

						</Form.Item>
					</Col>
					<Col xs={24} md={24}>
						<Form.Item
							name="zip_code"
						>

							<InputHorizontal>
								Zip code*
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
							</InputHorizontal>

						</Form.Item>
					</Col>
					<Col xs={24} md={24}>
						<Form.Item
							name="delivery_address"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										Delivery address*
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input placeholder='Search your address here...' />
											<InputIcon>
												<AddressHouse color='white' />
											</InputIcon>
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>
						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name=""
						>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<FindLocationButton>
									Find my locations using google <GgMapOutline />
								</FindLocationButton>
							</div>
						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="address"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										Address
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input.TextArea rows={3} />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="city"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										City*
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="state"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										State
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="country"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										Country*
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="phone"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										Phone
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<Form.Item
							name="email"
						>

							<InputHorizontal>
								<Row>
									<Col style={{ textAlign: "left" }} xs={12} md={3}>
										Email
									</Col>
									<Col xs={24} md={21}>
										<DeliveryAddressContainer>
											<Input />
										</DeliveryAddressContainer>
									</Col>
								</Row>
							</InputHorizontal>

						</Form.Item>
					</Col>

					<Col xs={24} md={24}>
						<CheckboxContainer>
							<Checkbox style={{ color: "white", textAlign: "left", fontSize: "1rem" }}> </Checkbox>
							<PreOrderCheckboxText>Yes, I would like to recieve the offers and updates by e-amil and agree to the processing of my personal data in accordance with the Go Halal <a>Data Protection Policy</a>. You can <a>unsubscribe</a> anytime you wish to not recieve any information about products and promotions of Go Halal.
								<br />
								For more information, please see our <a>privacy policy</a></PreOrderCheckboxText>
						</CheckboxContainer>
					</Col>

				</Row>
				<div style={{ textAlign: "center" }}>
					<NotifyButton onClick={() => {
						closeModal();
						setVisibleModal(true);
					}} >
						Send Now
					</NotifyButton>
				</div>
			</Form>
		</WelcomeGuestFormContainer>
	);
};

export default WelcomeGuestForm;
