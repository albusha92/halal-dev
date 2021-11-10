import * as React from 'react';
import user from '../../assets/svg-icon/user.svg';
import message from '../../assets/svg-icon/message.svg';
import suitcase from '../../assets/svg-icon/suitcase.svg';
import language from '../../assets/svg-icon/language.svg';
import germanyFlag from '../../assets/header/germany-flag.png';
import SVGIcon from '../SVGIcon/SVGIcon';
import VrLine from '../VrLIne';
import { ContactContainer, MenuItem, TopHeaderMenuContainer } from './HeaderStyled';
import { useMediaQuery } from 'react-responsive';
import { TopMenuItem } from '../../schema/general';
import ReactFlagsSelect from 'react-flags-select';

interface ITopHeaderMenuProps {
}

const topMenus: TopMenuItem[] = [
	{
		name: "About us",
		icon: user,
		link: ""
	},
	{
		name: "FAQ",
		icon: message,
		link: ""
	},
	{
		name: "Career",
		icon: suitcase,
		link: ""
	}
]

const TopHeaderMenu: React.FunctionComponent<ITopHeaderMenuProps> = (props) => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const [selected, setSelected] = React.useState<string>("DE");
	const onSelect = (code: string): void => setSelected(code);
	return (
		<TopHeaderMenuContainer>
			{topMenus.map((item, idx) => {
				return (
					<React.Fragment key={idx}>
						<MenuItem key={item.name}>
							<SVGIcon src={item.icon} size={lap1600 ? 20 : lap1440 ? 15 : lap1024 ? 15 : 15} /> <span>{item.name}</span>
						</MenuItem>
						<VrLine height={12} />
					</React.Fragment>
				)
			})}
			<MenuItem>
				{/* <SVGIcon src={language} size={lap1600 ? 20 : lap1440 ? 15 : lap1024 ? 15 : 15} /> <span>Deutsch</span> <img src={germanyFlag} width={"22px"} alt="" /> */}
				<ContactContainer>
					<ReactFlagsSelect
						selected={selected}
						onSelect={onSelect}
						showSelectedLabel={true}
						showSecondarySelectedLabel={true}
						selectedSize={16}
						showOptionLabel={true}
						showSecondaryOptionLabel={true}
						optionsSize={16}
						placeholder={"search"}
						searchable={false}
						searchPlaceholder={""}
						alignOptionsToRight={false}
						fullWidth={true}
						disabled={false}
					/>
				</ContactContainer>
			</MenuItem>
		</TopHeaderMenuContainer>
	);
};

export default TopHeaderMenu;
