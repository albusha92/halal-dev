import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { ImageContainer, ImageLogo, ThankModalContainer, ThankModalHeader } from 'features/register/ThankModalStyled';
import * as React from 'react';
import logo from 'assets/home-page/go-halal-logo.png';
import { PreOrderModalContent, PreOrderModalTitle, PreOrderSubTitle } from './PreOrderModalStyled';
import PreOrderForm from './PreOrderForm';

interface IPreOrderModalProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

const PreOrderModal: React.FunctionComponent<IPreOrderModalProps> = ({ visible, setVisible }) => {

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
			closeIcon={<CloseOutlined style={{ color: 'white' }} />}
			footer={null}
			width={1000}

		>
			<ThankModalContainer>
				<ThankModalHeader>
					<ImageContainer>
						<ImageLogo src={logo} alt="" />
					</ImageContainer>
				</ThankModalHeader>
				<PreOrderModalContent>
					<PreOrderModalTitle>
						Register your interest to Pre order Go halal Products
					</PreOrderModalTitle>
					<PreOrderSubTitle>
						No charges until product arrives. First shipping will be available in holy  Ramadhan 2022
					</PreOrderSubTitle>
					<PreOrderForm closeModal={handleCancel} />
				</PreOrderModalContent>
			</ThankModalContainer>
		</Modal>
	);
};

export default PreOrderModal;
