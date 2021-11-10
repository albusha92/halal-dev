import * as React from 'react';
import { CheckboxContainer, InputContainer, NotifyButton, RegisterContainer, RegisterTitle } from './RegisterStyled';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import SelectCountry from './SelectCountry';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
	return (
		<RegisterContainer>
			<RegisterTitle>
				Register for offers and updates
			</RegisterTitle>
			<Form
				name="basic"
				// labelCol={{ span: 8 }}
				// wrapperCol={{ span: 16 }}
				// initialValues={{ remember: true }}
				onFinish={() => { }}
				onFinishFailed={() => { }}
				autoComplete="off"
			>
				<Row justify="center" gutter={30}>
					<Col xs={24} md={5}>
						<Form.Item
							name="first_name"
						>
							<InputContainer>
								<Input style={{
								}} placeholder="First Name" />
							</InputContainer>
						</Form.Item>
					</Col>
					<Col xs={24} md={5}>
						<Form.Item
							name="last_name"
						>
							<InputContainer>
								<Input style={{
								}} placeholder="Last Name" />
							</InputContainer>
						</Form.Item>
					</Col>
					<Col xs={24} md={5}>
						<Form.Item
							name="email"
						>
							<InputContainer>
								<Input style={{
								}} placeholder="Email Adddress" />
							</InputContainer>

						</Form.Item>
					</Col>
					<Col xs={24} md={5}>
						<SelectCountry />
					</Col>
				</Row>
				<CheckboxContainer>
					<Checkbox style={{ color: "white" }}>I would like to subscribe to Go Halal’s notifications and offers. </Checkbox>
				</CheckboxContainer>

				<NotifyButton>
					Notify me
				</NotifyButton>
			</Form>
		</RegisterContainer>
	);
};

export default Register;
