import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";
import { ResponsivePadding } from "../GeneralStyled";

export const FilterContainer = styled(ResponsivePadding)`
	display: none;
  @media ${device.tablet960} {
	  display: block;
    /* margin-top: 0.75rem; */
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  }
  &::before{
		content: '';
		width: 100%;
		top: -1px;
		position: absolute;
		left: 0;
		height: 1px;
		background-color: #DDDDDD;
	}
`;

interface FilterItemProps {
	chosen: boolean;
}

export const FilterItem = styled.div<FilterItemProps>`
  margin: 0 1rem 0 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.darkGrey};
  font-weight: bold;
  white-space: nowrap;
  border-bottom: 5px solid;
  line-height: 2rem;
  font-size: .85rem;
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
  border-color: ${(props) => (props.chosen ? colors.secondary : colors.white)};
  transition: all 0.3s linear;
  &:hover {
    border-color: ${colors.secondary};
    /* color: ${colors.secondary}; */
  }

  & .ant-select-selector {
    padding-left: 0 !important;
  }
`;

export const FilterIconContainer = styled.div`
  display: inline-flex;
  padding-right: 0.18rem;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.5rem;
  }
`;

export const LiItem = styled.li`
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    right: 0;
    top: 12%;
    width: 1px;
    height: 70%;
    background-color: ${colors.darkGrey};
    position: absolute;
  }
`;
