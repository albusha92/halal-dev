import { message, Modal, Space } from 'antd';
import * as React from 'react';
import { FollowText, ImageContainer, ImageLogo, MeetLinkContainer, ShareOrInviteBtn, ShareText, ThankForSubText, ThankModalContainer, ThankModalContent, ThankModalFooter, ThankModalHeader } from './ThankModalStyled';
import logo from 'assets/home-page/go-halal-logo.png';
import { CallOutline, ChatSolid, CopyOutline, FacebookSolid, InstaOutline, Linkedin, MailOutline, ShareOutline, TikTok, TwitterSolid, YoutubeText } from 'uikit/icon-component';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CloseOutlined } from '@ant-design/icons';

interface IThankModalProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
	text: string;
}

const ThankModal: React.FunctionComponent<IThankModalProps> = ({ visible, setVisible, text }) => {

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
			width={600}
			closeIcon={<CloseOutlined style={{color: 'white'}} />}
			footer={null}

		>
			<ThankModalContainer>
				<ThankModalHeader>
					<ImageContainer>
						<ImageLogo src={logo} alt="" />
					</ImageContainer>
				</ThankModalHeader>
				<ThankModalContent>
					<ThankForSubText>
						{text}
					</ThankForSubText>
					<Space direction="vertical" style={{ width: "100%", marginTop: "1rem" }}>
						<MailOutline fontSize={"7rem"} />
						<MeetLinkContainer>
							https://meet.google.com/sio-jgiw-rbz
							<CopyToClipboard onCopy={() => {
								message.success("Copied to clipboard")
							}} text={'https://meet.google.com/sio-jgiw-rbz'}>
								<CopyOutline style={{ cursor: "pointer" }} />
							</CopyToClipboard>
						</MeetLinkContainer>
						<ShareText>
							Share Go Halal with your loved ones
						</ShareText>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<ShareOrInviteBtn>
								Share or Invite
								<ShareOutline fontSize={"1.2rem"} />
							</ShareOrInviteBtn>
						</div>
						<FollowText>
							You can also follow us here for updates.
						</FollowText>
					</Space>
				</ThankModalContent>
				<ThankModalFooter>
					<CallOutline fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<TikTok fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<ChatSolid fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<TwitterSolid fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<YoutubeText fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<FacebookSolid fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<InstaOutline fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
					<Linkedin fontSize={"1.2rem"} style={{ cursor: "pointer" }} />
				</ThankModalFooter>
			</ThankModalContainer>
		</Modal>
	);
};

export default ThankModal;
