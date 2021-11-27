import { Select } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../../config/constants';
import { languages } from '../../../../uikit/header/TopHeaderMenu';
import SvgGlobal from '../../../../uikit/icon-component/Global';
import SvgPlayRound from '../../../../uikit/icon-component/PlayRound';
import { RootState } from '../../../../ultils/store';
import { update_language } from '../../../home-page/slices/homeSlice';
import { Description, FounderMediaContainer, Language, OurStoryContainer, VideoContainer } from './FounderMediaStyled';
const { Option } = Select;
interface IFounderMediaProps {
}

const FounderMedia: React.FunctionComponent<IFounderMediaProps> = (props) => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: RootState) => state.home);
	return (
		<FounderMediaContainer>
			<Language>
				<SvgGlobal color="black" fontSize={16} />
				<Select
					value={language}
					style={{
						width: 140,
						fontSize: "1rem",
						color: colors.black,
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
			</Language>
			<VideoContainer>
				<SvgPlayRound style={{cursor: "pointer"}} fontSize="2rem" />
			</VideoContainer>
			<OurStoryContainer>

				{'Our story >>'}
			</OurStoryContainer>
		</FounderMediaContainer>
	);
};

export default FounderMedia;
