import { Col, Dropdown, Form, Input, Row, Select } from 'antd';
import contactImg from 'assets/home-page/contact.png';
import { colors } from 'config/constants';
import { NotifyButton } from 'features/register/RegisterStyled';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ArrowDown, Call, Envelop, Pin } from 'uikit/icon-component';
import { ArrowDownInput, ContactUsContainer, CtsInforContainer, CtsInforItem, CtuContent, CtuSubTitle, CtuTitle, YourInquiry } from './ContactUsStyled';
import InquiryCheckbox from './InquiryCheckbox';

interface IContactUsProps {
}

const ContactUs: React.FunctionComponent<IContactUsProps> = (props) => {
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const [visible, setVisible] = React.useState<boolean>(false);

	const handleVisibleChange = (flag: boolean) => {
		setVisible(flag);
	};
	return (
		<ContactUsContainer>
			<Row justify='center'>
				<Col xs={24} sm={24} md={24} xl={20} >
					<CtuContent>
						<CtuTitle>
							Contact Us
						</CtuTitle>
						<CtuSubTitle>
							Please complete the contact form so that we can answer your questions, requests, feedback and suggestions.
						</CtuSubTitle>
					</CtuContent>
					<Row justify='center' gutter={[lap1024 ? 80 : 20, 30]}>
						<Col xs={24} sm={18} md={16} xl={18} >
							<Form
								name="basic"
								onFinish={() => { }}
								onFinishFailed={() => { }}
								autoComplete="off"
							>
								<Row justify="center" gutter={30}>
									<Col xs={24} md={4}>
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
									<Col xs={24} md={10}>
										<Form.Item
											name="first_name"

										>
											<Input style={{
											}} placeholder="First Name" />
										</Form.Item>
									</Col>
									<Col xs={24} md={10}>
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
									<Col xs={24} md={24}>
										<Dropdown
											trigger={["click"]}
											overlay={<InquiryCheckbox closeDropdown={() => setVisible(false)} />}

											onVisibleChange={handleVisibleChange}
											visible={visible}
											placement="bottomLeft">
											<Form.Item
												name="inquiry"
											>
												<YourInquiry>
													Your Inquiry
													<ArrowDownInput>
														<ArrowDown color='white' fontSize={'0.5rem'} />
													</ArrowDownInput>
												</YourInquiry>
												<Input style={{
												}} placeholder="Your Inquiry" />

											</Form.Item>
										</Dropdown>
									</Col>
									<Col xs={24} md={24}>
										<Form.Item
											name="message"
										>

											<Input.TextArea
												rows={8}
												style={{
												}} placeholder="Message" />

										</Form.Item>
									</Col>
								</Row>
								<div style={{ textAlign: "center" }}>
									<NotifyButton>
										Submit your Inquery
									</NotifyButton>
								</div>
							</Form>
						</Col>
						<Col xs={24} sm={6} md={8} xl={6} >
							<img src={contactImg} alt='' width={'100%'} />
							<CtsInforContainer>
								<CtsInforItem>
									<Call fontSize={'1.5rem'} color={colors.primary} />
									Hotline (Mo. -Sa. 8 -20 Hrs.)
									+49 - 8161 - 5193561
								</CtsInforItem>
								<CtsInforItem>
									<Pin fontSize={'1.5rem'} color={colors.primary} />
									Ganzenmüllerstraße 27 85354
									Freising Germany
								</CtsInforItem>
								<CtsInforItem>
									<Envelop fontSize={'1.3rem'} color={colors.primary} />
									support@gohalalshop.com
								</CtsInforItem>
							</CtsInforContainer>
						</Col>
					</Row>
				</Col>

			</Row>
		</ContactUsContainer>
	);
};

export default ContactUs;
