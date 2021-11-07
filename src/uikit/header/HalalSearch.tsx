import { Input, Select } from 'antd';
import * as React from 'react';
import VrLine from '../VrLIne';
import { HalalSearchContainer, RegionContainer, RegionItem, RegionTitle, SearchContainer, SearchIconContainer } from './BodyHeaderStyled';
import search from '../../assets/svg-icon/search.svg';
import SVGIcon from '../SVGIcon/SVGIcon';
import { colors } from '../../config/constants';
import { useMediaQuery } from 'react-responsive';

interface IHalalSearchProps {
}

const regions = ["Turkey", "Middle East", "Africa", "Afghanistan", "Pakistan", "India", "European", "Asean",]

const { Option } = Select;
const HalalSearch: React.FunctionComponent<IHalalSearchProps> = (props) => {

	const lap1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });

	return (
		<SearchContainer>
			<HalalSearchContainer>
				<Input style={{ flex: 1 }} placeholder="I'm searching for..." bordered={false} />
				<VrLine height={24} style={{ backgroundColor: "#DDDDDD" }} />
				<span>
					<Select defaultValue="all" style={{ minWidth: 140, fontSize: lap1600 ? "14px" : lap1440 ? "13px" : lap1024 ? "12px" : "11px", fontWeight: "bold", fontFamily: "Raleway", color: colors.black }} bordered={false}>
						<Option value="all">All Categories</Option>
						<Option value="meat">Meat</Option>
						<Option value="Vegetable">Vegetable</Option>
					</Select>
				</span>
				<SearchIconContainer>
					<SVGIcon src={search} size={lap1600 ? 18 : lap1440 ? 16 : lap1024 ? 15 : 13} />
				</SearchIconContainer>
			</HalalSearchContainer>
			<RegionContainer>
				<RegionTitle>
					Regional:
				</RegionTitle>
				{regions.map((region, idx) => {
					return (
						<React.Fragment key={idx}>
							<RegionItem>
								{region}
							</RegionItem>
							{idx !== regions.length - 1 && <VrLine height={13} style={{ backgroundColor: "#DDDDDD" }} />}
						</React.Fragment>
					)
				})}
			</RegionContainer>
		</SearchContainer>
	);
};

export default HalalSearch;
