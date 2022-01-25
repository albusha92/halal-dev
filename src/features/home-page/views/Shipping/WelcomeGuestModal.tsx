import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { ImageContainer, ImageLogo, ThankModalContainer, ThankModalContent, ThankModalHeader } from 'features/register/ThankModalStyled';
import logo from 'assets/home-page/go-halal-logo.png';
import * as React from 'react';
import { WelcomeGuestSubTitle, WelcomeGuestTitle } from './WelcomeGuestModalStyled';
import WelcomeGuestForm from './WelcomeGuestForm';

interface IWelcomeGuestModalProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

const WelcomeGuestModal: React.FunctionComponent<IWelcomeGuestModalProps> = ({ visible, setVisible }) => {


	const handleOk = () => {

	}

	const handleCancel = () => {
		setVisible(false)
	}
	return (
		<Modal
			visible={visible}
			bodyStyle={{
				padding: 0,
			}}
			onOk={handleOk}
			onCancel={handleCancel}
			centered
			width={800}
			closeIcon={<CloseOutlined style={{ color: 'white' }} />}
			footer={null}

		>
			<ThankModalContainer>
				<ThankModalHeader>
					<ImageContainer>
						<ImageLogo src={logo} alt="" />
					</ImageContainer>
				</ThankModalHeader>
				<ThankModalContent>
					<WelcomeGuestTitle>
						Welcome Guest!
					</WelcomeGuestTitle>
					<WelcomeGuestSubTitle>
						Please let us know where you would like us to deliver our products & services, this will help us to serve better in your area.
					</WelcomeGuestSubTitle>
					<WelcomeGuestForm closeModal={handleCancel} />
				</ThankModalContent>

			</ThankModalContainer>
		</Modal>
	);
};

export default WelcomeGuestModal;
