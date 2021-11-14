import { Select } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import message from '../../assets/svg-icon/message.svg';
import suitcase from '../../assets/svg-icon/suitcase.svg';
import user from '../../assets/svg-icon/user.svg';
import { colors } from '../../config/constants';
import { update_language } from '../../features/home-page/slices/homeSlice';
import { TopMenuItem } from '../../schema/general';
import { RootState } from '../../ultils/store';
import SvgArabicFlag from '../icon-component/ArabicFlag';
import SvgGermanFlag from '../icon-component/GermanFlag';
import SvgGlobal from '../icon-component/Global';
import SvgTurkeyFlag from '../icon-component/TurkeyFlag';
import SvgUkFlag from '../icon-component/UkFlag';
import SVGIcon from '../SVGIcon/SVGIcon';
import VrLine from '../VrLIne';
import { MenuItem, TopHeaderMenuContainer } from './HeaderStyled';
import './TopHeaderMenu.css';
const { Option } = Select;

interface ITopHeaderMenuProps {
}

const topMenus: TopMenuItem[] = [
	{
		name: "About us",
		icon: user,
		link: "/about-go-halal"
	},
	{
		name: "FAQ",
		icon: message,
		link: "/about-go-halal"
	},
	{
		name: "Career",
		icon: suitcase,
		link: "/about-go-halal"
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
	const dispatch = useDispatch();
	const { language } = useSelector((state: RootState) => state.home);
	const history = useHistory();
	return (
		<TopHeaderMenuContainer>
			{topMenus.map((item, idx) => {
				return (
					<React.Fragment key={idx}>
						<MenuItem key={item.name} onClick={() => history.push(item.link)}>
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
						justifyContent: "flex-start"
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
