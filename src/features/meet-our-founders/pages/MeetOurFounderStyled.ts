import styled from "styled-components";
import { colors } from "../../../config/constants";
import { device } from "../../../config/screensSizes";

export const MeetOurFounderContainer = styled.div`
  border-top: 1px solid ${colors.lightGrey};
  position: relative;
`;

export const OurTeamContainer = styled.div``;

export const TeamTabContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const TeamTabBtn = styled.div`
  color: ${colors.darkGrey};
  font-weight: bold;
  border-bottom: 2px solid ${colors.white};
  transition: all 0.3s linear;
  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.mobileM} {
    font-size: 0.6rem;
  }
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 1rem;
  }
  @media ${device.lap1024} {
    font-size: 1.3rem;
    border-width: 3px;
  }
  @media ${device.lap1280} {
    font-size: 1.3rem;
  }
  @media ${device.lap1440} {
    font-size: 1.3rem;
  }
  @media ${device.lap1920} {
    font-size: 1.3rem;
  }
  &:hover,
  &.focus {
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.primary};
    cursor: pointer;
    @media ${device.lap1024} {
      border-width: 3px;
    }
  }
`;

export const TeamTabContent = styled.div`
  margin-top: 1rem;

  @media ${device.lap1440} {
    padding: 0 2rem;
  }

  @media ${device.lap1600} {
    padding: 0 2rem;
  }
`;

export const TeamTabTitle = styled.div`
  color: ${colors.darkGrey};
  font-weight: bold;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.3rem;
	-webkit-text-stroke-width: 0.2px;
	letter-spacing: 1px;
	margin: 1rem 0;
  }
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }
  @media ${device.lap1280} {
    font-size: 2rem;
  }
  @media ${device.lap1440} {
	font-size: 2rem;
	margin-top: 2rem;
  }
  @media ${device.lap1920} {
	font-size: 2rem;
  }
`;
