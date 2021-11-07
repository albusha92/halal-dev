import * as React from 'react';
import { FreeShippingContainer, RatingImage } from './HeaderStyled';
import star from '../../assets/header/star.png';
interface IRatingProps {
}

const Rating: React.FunctionComponent<IRatingProps> = (props) => {
	return (
		<FreeShippingContainer>
			<RatingImage src={star} alt="" width="100%" /> <span style={{paddingBottom: "2px"}}>‘’very Good (4.5/5)’’</span>
		</FreeShippingContainer>
	);
};

export default Rating;
