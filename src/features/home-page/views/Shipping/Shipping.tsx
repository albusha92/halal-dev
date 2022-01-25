import * as React from 'react';
import { CaptionMunchen, HeyMunChenText, ShippingContainer, ShippingImage, ShippingImageText } from './ShippingStyled';
import image from '../../../../assets/home-page/shipping.png';
import imageText from '../../../../assets/home-page/shippingText.png';
import WelcomeGuestModal from './WelcomeGuestModal';
interface IShippingProps {
}

const Shipping: React.FunctionComponent<IShippingProps> = (props) => {
	const [visibleModal, setVisibleModal] = React.useState<boolean>(false);

	return (
		<ShippingContainer>
			<HeyMunChenText>
				HEY MÜNCHEN!
			</HeyMunChenText>
			<ShippingImage src={image} alt="" />
			<ShippingImageText src={imageText} alt="" width={"50%"} />
			<CaptionMunchen onClick={() => setVisibleModal(true)} >
				We are staring in München, let us know where you’d like us to be!
			</CaptionMunchen>
			<WelcomeGuestModal setVisible={setVisibleModal} visible={visibleModal} />
		</ShippingContainer>
	);
};

export default Shipping;
