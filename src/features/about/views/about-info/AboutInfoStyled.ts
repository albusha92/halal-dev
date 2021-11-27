import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const Container = styled.div`
  padding: 0.5rem;

  @media ${device.mobileS} {
    padding-left: 0.5rem;
  }
  @media ${device.mobileL} {
    padding-left: 0.5rem;
  }

  @media ${device.tablet768} {
    padding: 1.3rem 2rem;
  }
  @media ${device.tablet960} {
    padding: 2rem 4rem 0;
  }
  @media ${device.lap1024} {
    padding: 2rem 4rem 0;
  }
  @media ${device.lap1440} {
    max-width: 90rem;
    margin: 0 auto;
    padding-top: 2rem 0 0;
  }
  @media ${device.lap1920} {
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 0 0;
  }
`;

export const TabContainer = styled.div`
  display: inline-flex;
  white-space: nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media ${device.lap1280} {
    justify-content: center;
	gap: 2rem;
  }
  @media ${device.lap1440} {
	justify-content: center;
	gap: 2rem;
  }
  @media ${device.lap1920} {
	justify-content: center;
	gap: 2rem;
  }
`;

export const TabContentContainer = styled.div`
`;

export const Title = styled.div`
  text-align: center;
  color: ${colors.primary};
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 1rem;
    -webkit-text-stroke-width: 0.3px;
    letter-spacing: 1px;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
    -webkit-text-stroke-width: 0.4px;
  }

  @media ${device.tablet768} {
    font-size: 1.5rem;
    -webkit-text-stroke-width: 1px;
	letter-spacing: 1.5px;
  }
  @media ${device.tablet960} {
    font-size: 1.7rem;
	margin-bottom: 1rem;
  }
  @media ${device.lap1024} {
	font-size: 1.8rem;
  }
  @media ${device.lap1440} {
	font-size: 2rem;
  }
  @media ${device.lap1920} {
    font-size: 2rem;
  }
`;

export const Desctiption = styled.div`
  font-weight: bold;
  text-align: center;
  color: ${colors.darkGrey};
  & span {
    color: ${colors.primary};
  }
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }

  @media ${device.tablet768} {
    font-size: 1rem;
	-webkit-text-stroke-width: 0.2px;
  }
  @media ${device.tablet960} {
    font-size: 1rem;
  }
  @media ${device.lap1024} {
    font-size: 1rem;
  }
  @media ${device.lap1440} {
    font-size: 1rem;
  }
  @media ${device.lap1920} {
    font-size: 1rem;
  }
`;

export const CharacterContainer = styled.div`
  padding: 1rem 0;
`;
