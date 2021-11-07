import * as React from 'react';
import { CheckboxContainer, NotifyButton, RegisterContainer, RegisterTitle } from './RegisterStyled';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

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
					<Col span={5}>
						<Form.Item
							name="first_name"
						>
							<Input style={{
								fontFamily: "Raleway",
								fontSize: "18px",
								padding: "5px 15px"
							}} placeholder="First Name" />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item
							name="last_name"
						>
							<Input style={{
								fontFamily: "Raleway",
								fontSize: "18px",
								padding: "5px 15px"
							}} placeholder="Last Name" />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item
							name="email"
						>
							<Input style={{
								fontFamily: "Raleway",
								fontSize: "18px",
								padding: "5px 15px"
							}} placeholder="Email Adddress" />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item
							name="email"
						>
							<Input style={{
								fontFamily: "Raleway",
								fontSize: "18px",
								padding: "5px 15px"
							}} placeholder="Email Adddress" />
						</Form.Item>
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
