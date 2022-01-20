import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const MadeBetterContainer = styled.div`
  @media ${device.mobileS} {
    padding: 1rem 0.5rem;
  }

  @media ${device.tablet768} {
    padding: 1rem 4rem;
  }

  @media ${device.lap1024} {
    padding: 1rem 5rem;
  }

  @media ${device.lap1440} {
    padding: 1rem 4rem;
  }

  @media ${device.lap1600} {
    padding: 0rem 9rem;
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
  font-family: "Maven Pro", sans-serif;
  text-transform: capitalize;
  color: ${colors.primary};
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media ${device.mobileS} {
    font-size: 1rem;
	line-height: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
	line-height: 1.3rem;
  }

  @media ${device.tablet768} {
    font-size: 2rem;
    line-height: 2.1rem;
  }

  @media ${device.lap1024} {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media ${device.lap1280} {
    font-size: 3.6rem;
    line-height: 3.6rem;
	margin-bottom: 1.7rem;
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
    font-size: 4.2rem;
    line-height: 65px;
  }
`;

export const SecondaryText = styled.div`
  font-family: "Maven Pro", sans-serif;
  text-transform: capitalize;
  color: ${colors.secondary};
  font-size: 80px;
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 1.2rem;
	line-height: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }

  @media ${device.tablet768} {
    font-size: 2.5rem;
	line-height: 2.5rem;
  }

  @media ${device.lap1024} {
    font-size: 3.5rem;
  }

  @media ${device.lap1280} {
    font-size: 4.2rem;
	line-height: 4.2rem;
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

export const ThirdText = styled.div`
  font-family: "Maven Pro", sans-serif;
  text-transform: capitalize;
  color: ${colors.primary};
  font-size: 80px;
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }

  @media ${device.tablet768} {
    font-size: 1.4rem;
  }

  @media ${device.lap1024} {
    font-size: 2rem;
  }

  @media ${device.lap1280} {
    font-size: 2.5rem;
  }

  @media ${device.lap1366} {
    font-size: 2.7rem;
  }

  @media ${device.lap1440} {
    font-size: 2.8rem;
  }

  @media ${device.lap1600} {
    font-size: 2.9rem;
  }

  @media ${device.lap1920} {
    font-size: 3rem;
  }
`;
