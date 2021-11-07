import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const FounderContainer = styled.div`
  padding: 4% 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const FounderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  background-color: ${colors.secondary};
  @media ${device.tablet} {
    height: 50%;
  }

  @media ${device.lap1024} {
    height: 55%;
  }

  @media ${device.lap1280} {
    height: 50%;
  }

  @media ${device.lap1366} {
    height: 50%;
  }

  @media ${device.lap1440} {
    height: 53%;
  }

  @media ${device.lap1600} {
    height: 55%;
  }

  @media ${device.lap1920} {
    height: 55%;
  }
`;

export const FounderText = styled.div`
  font-weight: bold;
  font-size: 58px;
  color: ${colors.white};
  z-index: 1;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  margin-bottom: 80px;
  @media ${device.tablet} {
    font-size: 58px;
  }

  @media ${device.lap1024} {
    font-size: 38px;
	margin-bottom: 45px;
  }

  @media ${device.lap1280} {
    font-size: 44px;
	margin-bottom: 60px;
  }

  @media ${device.lap1366} {
    font-size: 48px;
	margin-bottom: 80px;
  }

  @media ${device.lap1440} {
    font-size: 46px;
  }

  @media ${device.lap1600} {
    font-size: 54px;
  }

  @media ${device.lap1920} {
    font-size: 58px;
  }
`;
