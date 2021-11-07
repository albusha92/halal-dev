import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const MadeBetterContainer = styled.div`
  @media ${device.tablet} {
    padding: 5% 100px;
  }

  @media ${device.lap1024} {
    padding: 8% 25px;
  }

  /* @media ${device.lap1366} {
    padding: 8% 75px;
  } */

  @media ${device.lap1440} {
    padding: 8% 100px;
  }

  @media ${device.lap1600} {
    padding: 8% 135px;
  }
`;

export const MadeBetterTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const PrimaryText = styled.div`
  font-family: "Neutraface 2 Display Titling";
  text-transform: uppercase;
  color: ${colors.primary};
  font-size: 58px;
  line-height: 65px;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 58px;
    line-height: 65px;
  }

  @media ${device.lap1024} {
    font-size: 45px;
    line-height: 50px;
  }

  @media ${device.lap1280} {
    font-size: 46px;
    line-height: 60px;
  }

  @media ${device.lap1366} {
    font-size: 50px;
    line-height: 65px;
  }

  @media ${device.lap1440} {
    font-size: 52px;
    line-height: 65px;
  }

  @media ${device.lap1600} {
    font-size: 54px;
    line-height: 65px;
  }

  @media ${device.lap1920} {
    font-size: 54px;
    line-height: 65px;
  }
`;

export const SecondaryText = styled.div`
  font-family: "Neutraface 2 Display Titling";
  text-transform: uppercase;
  color: ${colors.secondary};
  font-size: 80px;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 80px;
  }

  @media ${device.lap1024} {
    font-size: 64px;
  }

  @media ${device.lap1280} {
    font-size: 73px;
  }

  @media ${device.lap1366} {
    font-size: 76px;
  }

  @media ${device.lap1440} {
    font-size: 76px;
  }

  @media ${device.lap1600} {
    font-size: 80px;
  }

  @media ${device.lap1920} {
    font-size: 80px;
  }
`;
