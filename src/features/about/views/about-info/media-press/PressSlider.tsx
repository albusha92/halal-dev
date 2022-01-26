import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { PressItemContainer, PressSLiderContainer } from './PressSLiderStyled';

interface IPressSliderProps {
}

const PressSlider: React.FunctionComponent<IPressSliderProps> = (props) => {
	const desktop = useMediaQuery({ query: '(min-width: 2560px)' });
	const laptop1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const laptop1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const laptop1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: desktop ? 5 : laptop1600 ? 5 : laptop1440 ? 5 : laptop1024 ? 4 : 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<PressSLiderContainer  >
			<PressItemContainer></PressItemContainer>
			<PressItemContainer></PressItemContainer>
			<PressItemContainer></PressItemContainer>
			<PressItemContainer></PressItemContainer>
			<PressItemContainer></PressItemContainer>
			{/* <Slider {...settings}>
				{[1, 2, 3, 4, 5, 6, 6, 7].map(item => {
					return (
						<PressItemContainer key={item}>
							<div style={{ backgroundColor: 'white', padding: '2rem 4rem' }}>
								<div style={{ backgroundColor: 'white', padding: '2rem 4rem' }}>{item}</div></div>
						</PressItemContainer>
					)
				})}
			</Slider> */}
		</PressSLiderContainer >
	);
};

export default PressSlider;
