import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const TabContainer = styled.div`
  border-radius: 50px;
  box-shadow: 0px 0px 0px 2px ${colors.secondary};
  font-weight: bold;
  display: inline-flex;
  transition: all 0.3s linear;
  @media ${device.mobileS} {
    padding: 0.1rem 0.7rem;
	font-size: 0.5rem;
  }
  @media ${device.mobileM} {
    padding: 0.2rem 1rem;
	font-size: 0.6rem;
  }
  @media ${device.mobileL} {
    padding: 0.2rem 1rem;
	font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    padding: 0.3rem 2rem;
	font-size: 1rem;
  }
  @media ${device.lap1024} {
    padding: 0.4rem 2.7rem;
	font-size: 1.3rem;
  }
  @media ${device.lap1280} {
    padding: 0.4rem 3.2rem;
	font-size: 1.3rem;
  }
  @media ${device.lap1440} {
	padding: 0.4rem 3.2rem;
	font-size: 1.3rem;
  }
  @media ${device.lap1920} {
	padding: 0.4rem 3.2rem;
	font-size: 1.3rem;
  }
  &:hover, &.focus{
	color: white;
	background-color: ${colors.secondary};
	cursor: pointer;
  }
`;
