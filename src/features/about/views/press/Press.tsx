import * as React from 'react';
import { DetailText, HistoryTitle } from '../history/HistoryStyled';
import { CeoSpeechContainer, ImageContainer, PressBrandsContainer, PressContainer } from './PressStyled';
import leaders from '../../../../assets/about/10XLeaders.png';
import brand from '../../../../assets/about/brand.png';
interface IPressProps {
}

const Press: React.FunctionComponent<IPressProps> = (props) => {
	return (
		<PressContainer>
			<HistoryTitle>
				Media & Press
			</HistoryTitle>
			<DetailText>
				Welcome to The Drum Online Media Awards, which is celebrating it's 10th year of being the global platform for recognising worldwide content and commercial solutions that are original, clever and thought provoking. If you are a media owner, regardless of scale, then these perfect awards for you.
			</DetailText>
			<CeoSpeechContainer>
				<span>
					I would like to personally thank you for your outstanding product. Farmart is both attractive and highly adaptable. I made back the purchase price in just 48 hours! Since I invested in Farmart I made over 100,000 dollars profits
				</span>
				<br />
				<br />
				<div>Jonhny-<span style={{ fontWeight: "normal" }}>iFamily CEO</span></div>
			</CeoSpeechContainer>
			<PressBrandsContainer>
				<div style={{width: "100%"}}>
					<ImageContainer>
						<img width="30%" alt="" src={leaders} />
					</ImageContainer>
				</div>
				<div style={{width: "100%"}}>
					<ImageContainer>
						<img width="30%" alt="" src={brand} />
					</ImageContainer>
				</div>
				<div style={{width: "100%"}}>
					<ImageContainer>
						<img width="30%" alt="" src={leaders} />
					</ImageContainer>
				</div>
				<div style={{width: "100%"}}>
					<ImageContainer>
						<img width="30%" alt="" src={brand} />
					</ImageContainer>
				</div>
				<div style={{width: "100%"}}>
					<ImageContainer>
						<img width="30%" alt="" src={leaders} />
					</ImageContainer>
				</div>
			</PressBrandsContainer>
		</PressContainer>
	);
};

export default Press;
