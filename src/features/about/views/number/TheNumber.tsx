import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { CaptionText, NumberItem, NumberText, TheNumberContainer, TheNumberWrap } from './TheNumberStyled';

interface ITheNumberProps {
}

const numberList = [
	{
		number: 1.124,
		text: "Farmers Empowered",
	},
	{
		number: 685,
		text: "acres cultived",
	},
	{
		number: "300+",
		text: "chiken reared",
	},
	{
		number: 2.2132,
		text: "farm sponsorships",
	},
	{
		number: 35,
		text: "farm followers",
	},
]

const TheNumber: React.FunctionComponent<ITheNumberProps> = (props) => {
	const mobileL = useMediaQuery({ query: '(min-width: 425px)' });
	return (
		<TheNumberContainer>

			{numberList.slice(0, 3).map((item, idx) => {
				return (
					<NumberItem>
						<NumberText>
							{item.number}
						</NumberText>
						<CaptionText>
							{item.text}
						</CaptionText>
					</NumberItem>
				);
			})}
			{mobileL ? numberList.slice(3, 5).map((item, idx) => {
				return (
					<NumberItem>
						<NumberText>
							{item.number}
						</NumberText>
						<CaptionText>
							{item.text}
						</CaptionText>
					</NumberItem>
				);
			}) :
				<TheNumberWrap>
					{numberList.slice(3, 5).map((item, idx) => {
						return (
							<NumberItem>
								<NumberText>
									{item.number}
								</NumberText>
								<CaptionText>
									{item.text}
								</CaptionText>
							</NumberItem>
						);
					})}
				</TheNumberWrap>}
		</TheNumberContainer>
	);
};

export default TheNumber;
