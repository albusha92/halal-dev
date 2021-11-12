import * as React from 'react';
import user from '../../assets/svg-icon/user.svg';
import message from '../../assets/svg-icon/message.svg';
import suitcase from '../../assets/svg-icon/suitcase.svg';
import germanyFlag from '../../assets/header/germany-flag.png';
import SVGIcon from '../SVGIcon/SVGIcon';
import VrLine from '../VrLIne';
import { ContactContainer, LanguageContainer, MenuItem, TopHeaderMenuContainer } from './HeaderStyled';
import { useMediaQuery } from 'react-responsive';
import { TopMenuItem } from '../../schema/general';
import ReactFlagsSelect from 'react-flags-select';
import SvgTurkeyFlag from '../../ukit/icon-component/TurkeyFlag';
import { Select } from 'antd';
import SvgGermanFlag from '../../ukit/icon-component/GermanFlag';
import { WhiteBackgroundText } from '../../features/home-page/views/certified/CertifiedStyled';
import { colors } from '../../config/constants';
import SvgGlobal from '../../ukit/icon-component/Global';
import SvgEnglishFlag from '../../ukit/icon-component/EnglishFlag';
import SvgUkFlag from '../../ukit/icon-component/UkFlag';
import './TopHeaderMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ultils/store';
import { update_language } from '../../features/home-page/slices/homeSlice';
import SvgArabicFlag from '../icon-component/ArabicFlag';
const { Option } = Select;

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

export const languages = [
	{
		name: "Turkish",
		value: 'tu',
		icon: <SvgTurkeyFlag fontSize={20} />,
	},
	{
		name: "Detusch",
		value: 'de',
		icon: <SvgGermanFlag fontSize={20} />,
	},
	{
		name: "English",
		value: 'en',
		icon: <SvgUkFlag fontSize={20} />,
	},
	{
		name: "Arabic",
		value: 'ar',
		icon: <SvgArabicFlag fontSize={20} />,
	},
]

const TopHeaderMenu: React.FunctionComponent<ITopHeaderMenuProps> = (props) => {
	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const [selected, setSelected] = React.useState<string>("DE");
	const onSelect = (code: string): void => setSelected(code);
	const dispatch = useDispatch();
	// const [language, setLanguage] = React.useState<string>('de');
	const {language} = useSelector((state: RootState) => state.home);
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
				<SvgGlobal fontSize={20} />
				<Select
					value={language}
					showArrow={false}
					style={{
						width: 120,
						fontSize: "1rem",
						color: colors.white,
						padding: 0,
						display: 'flex',
						alignItems: "center",
						justifyContent: "center"
					}} 
					bordered={false}
					onChange={(value) => {
						dispatch(update_language(value));
					}}
				>
					{languages.map(item => {
						return (
							<Option style={{ color: colors.darkGrey, width: 120 }} value={item.value}>
								{item.name} {item.icon}
							</Option>
						)
					})}

				</Select>
			</MenuItem>
		</TopHeaderMenuContainer >
	);
};

export default TopHeaderMenu;
