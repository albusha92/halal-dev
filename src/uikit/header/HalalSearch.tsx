import { Input, Select } from 'antd';
import * as React from 'react';
import { colors } from '../../config/constants';
import SvgSearch from '../icon-component/Search';
import VrLine from '../VrLIne';
import { HalalSearchContainer, RegionContainer, RegionItem, RegionTitle, SearchContainer, SearchIconContainer } from './BodyHeaderStyled';

interface IHalalSearchProps {
}

const regions = ["Turkey", "Middle East", "Africa", "Afghanistan", "Pakistan", "India", "European", "Asean",]

const { Option } = Select;
const HalalSearch: React.FunctionComponent<IHalalSearchProps> = (props) => {

	return (
		<SearchContainer>
			<HalalSearchContainer>
				<Input style={{ flex: 1, fontSize: ".75rem" }} placeholder="I'm searching for..." bordered={false} />
				<VrLine height={24} style={{ backgroundColor: "#DDDDDD" }} />
				<span>
					<Select defaultValue="all" style={{ minWidth: 140, fontSize: ".75rem", fontWeight: "bold", fontFamily: "Raleway", color: colors.black }} bordered={false}>
						<Option value="all">All Categories</Option>
						<Option value="meat">Meat</Option>
						<Option value="Vegetable">Vegetable</Option>
					</Select>
				</span>
				<SearchIconContainer>
					<SvgSearch fontSize="1rem" />
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
