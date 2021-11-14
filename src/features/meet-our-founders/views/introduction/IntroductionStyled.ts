import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const IntroductionContainer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet768} {
    flex-direction: row;
    padding: 1.5rem 0.5rem;
  }
  @media ${device.tablet960} {
    padding: 2rem 0.5rem;
  }
  @media ${device.lap1024} {
	  padding: 2rem 5rem;
  }
  @media ${device.lap1440} {
  }
  @media ${device.lap1600} {
	  max-width: 90rem;
	  padding: 2rem 0;
	  margin: 0 auto;
  }
`;

export const Caption = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
  @media ${device.tablet768} {
    font-size: 1.5rem;
    -webkit-text-stroke-width: 0.2px;
    letter-spacing: 1px;
    padding: 1rem 0;
    flex: 1;
  }
  @media ${device.lap1280} {
    font-size: 1.8rem;
  }
  @media ${device.lap1600} {
    font-size: 2rem;
  }
`;

export const IntroText = styled.div`
  font-weight: bold;
  flex: 1;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
    -webkit-text-stroke-width: 0.1px;
  }
  @media ${device.tablet960} {
    font-size: 0.9rem;
  }
  @media ${device.lap1280} {
    font-size: 1rem;
  }
  @media ${device.lap1600} {
    font-size: 1.4rem;
  }
`;
