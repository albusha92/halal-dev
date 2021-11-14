import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import SvgStar from '../../../../uikit/icon-component/Star';
import { CharacterContainer, CharacterContent, CharacterTitle, IconContainer, ItemContainer } from './CharacterStyled';

interface ICharacterProps {
}

const characters = [
	{
		name: "Humility",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		name: "Excellence",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		name: "Integrity",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		name: "Hunger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
]

const Character: React.FunctionComponent<ICharacterProps> = (props) => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	return (
		<CharacterContainer>
			<Row gutter={lap1600 ? [90, 70] : lap1440 ? [90, 70] : lap1280 ? [50, 50] : lap1024 ? [40, 40] : [20, 20]}>
			{characters.map((item, idx) => {

				return (
					<Col xs={12} sm={6} key={idx}>
						<ItemContainer>
							<IconContainer>
								<SvgStar />
							</IconContainer>
							<CharacterTitle>
								{item.name}
							</CharacterTitle>
							<CharacterContent>
								{item.description}
							</CharacterContent>
						</ItemContainer>
					</Col>
				)
			})}

		</Row>

		</CharacterContainer >
	);
};

export default Character;
