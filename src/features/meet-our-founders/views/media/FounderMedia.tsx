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
			<Description>
				Our team of food scientists, consumer & innovation experts make sure to bring authentic products to your basket <span> through a rigrous screening, verification and auditing processes </span>in the halal supply chain. The ultimate goal is make it sure that the products you choose meet the high quality standards and to promote your health & welness in the best possible manner.
			</Description>
			<Language>
				<SvgGlobal color="black" fontSize={16} />
				<Select
					value={language}
					showArrow={false}
					style={{
						width: 120,
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

			</VideoContainer>
			<OurStoryContainer>
				<SvgPlayRound />
				{'Our story >>'}
			</OurStoryContainer>
		</FounderMediaContainer>
	);
};

export default FounderMedia;
