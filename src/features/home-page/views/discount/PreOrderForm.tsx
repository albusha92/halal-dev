import { Checkbox, Col, Dropdown, Form, Input, Row, Select } from 'antd';
import { CheckboxContainer, NotifyButton } from 'features/register/RegisterStyled';
import ThankModal from 'features/register/ThankModal';
import * as React from 'react';
import { ArrowDown } from 'uikit/icon-component';
import { ArrowDownInput } from '../contact-us/ContactUsStyled';
import { FirstStepText, LikedProduct, PreOrderCheckboxText, PreOrderFormContainer } from './PreOrderModalStyled';
import PreOrderCheckbox from './PreOrderSelect';

interface IPreOrderFormProps {
	closeModal: () => void;
}

const PreOrderForm: React.FunctionComponent<IPreOrderFormProps> = ({ closeModal }) => {
	const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
	return (
		<PreOrderFormContainer>
			<Form
				name="pre-order"
				onFinish={() => { }}
				onFinishFailed={() => { }}
				autoComplete="off"
			>
				<Row justify="start" gutter={30}>
					<Col xs={24} md={24}>
						<Form.Item
							name="type_name"
						>
							<Dropdown trigger={["click"]} overlay={<PreOrderCheckbox />} placement="bottomLeft">
								<LikedProduct>
									Which products would you like to buy form us
									<ArrowDownInput>
										<ArrowDown color='white' fontSize={'0.5rem'} />
									</ArrowDownInput>
								</LikedProduct>
							</Dropdown>
						</Form.Item>
					</Col>
					<Col xs={24}>
						<FirstStepText>
							Your basic infomation
						</FirstStepText>
					</Col>

					<Col xs={24} md={6}>
						<Form.Item
							name="type_name"
						>
							<div>
								<Select
									showArrow={false}
									style={{ textAlign: "center", fontWeight: 500 }}
									defaultValue={"mr"}
								>
									<Select.Option value={'mr'}>
										Mr.
									</Select.Option>
									<Select.Option value={'miss'}>
										Miss.
									</Select.Option>
								</Select>
							</div>
						</Form.Item>
					</Col>
					<Col xs={24} md={9}>
						<Form.Item
							name="first_name"

						>
							<Input style={{
							}} placeholder="First Name" />
						</Form.Item>
					</Col>
					<Col xs={24} md={9}>
						<Form.Item
							name="last_name"
						>
							<Input style={{
							}} placeholder="Last Name" />
						</Form.Item>
					</Col>
					<Col xs={24} md={24}>
						<Form.Item
							name="email"
						>

							<Input style={{
							}} placeholder="E-mail Adddress" />

						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item
							name="city"
						>

							<Input style={{
							}} placeholder="City" />

						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item
							name="house"
						>

							<Input style={{
							}} placeholder="House Nr." />

						</Form.Item>
					</Col>


					<Col xs={24} md={12}>
						<Form.Item
							name="zip_code"
						>

							<Input style={{
							}} placeholder="Zip code" />

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
						Pre book now
					</NotifyButton>
				</div>
			</Form>
			<ThankModal text='Thank you for interest  to pre order our products. You will be among the first to recieve our products. Will be back to you soon!' setVisible={setVisibleModal} visible={visibleModal} />
		</PreOrderFormContainer>
	);
};

export default PreOrderForm;
