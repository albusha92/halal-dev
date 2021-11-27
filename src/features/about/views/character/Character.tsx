import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import SvgDiversity from '../../../../uikit/icon-component/Diversity';
import SvgEfficiency from '../../../../uikit/icon-component/Efficiency';
import SvgExcellence from '../../../../uikit/icon-component/Excellence';
import SvgIntegrity from '../../../../uikit/icon-component/Integrity';
import SvgLeader from '../../../../uikit/icon-component/Leader';
import SvgPhilarthropy from '../../../../uikit/icon-component/Philarthropy';
import SvgQuality from '../../../../uikit/icon-component/Quality';
import SvgTrust from '../../../../uikit/icon-component/Trust';
import { CharacterContent, CharacterTitle, IconContainer, ItemContainer } from './CharacterStyled';

interface ICharacterProps {
}

const characters = [
	{
		icon: <SvgLeader />,
		name: "Leadership",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgQuality />,
		name: "Authenticity & Quality",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgIntegrity />,
		name: "Integrity",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgTrust />,
		name: "Trust & Transparency",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgPhilarthropy />,
		name: "Philanthropy",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgEfficiency />,
		name: "Efficiency",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgExcellence />,
		name: "Excellence",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
	{
		icon: <SvgDiversity />,
		name: "Diversity",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla"
	},
]

const Character: React.FunctionComponent<ICharacterProps> = (props) => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1280 = useMediaQuery({ query: '(min-width: 1280px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	return (
		<Row gutter={lap1600 ? [50, 50] : lap1440 ? [50, 50] : lap1280 ? [50, 50] : lap1024 ? [40, 40] : [20, 20]}>
			{characters.map((item, idx) => {

				return (
					<Col xs={12} sm={6} key={idx}>
						<ItemContainer>
							<IconContainer>
								{item.icon}
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

	);
};

export default Character;
