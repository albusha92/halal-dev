import styled from "styled-components";
import { device } from "../../../../config/screensSizes";

export const TheNumberContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet768} {
    padding: 1rem 2rem;
  }
  @media ${device.tablet960} {
    margin: 0rem auto;
    width: 100%;
    /* max-width: 80rem; */
    box-sizing: border-box;
    flex-wrap: nowrap;
    min-height: unset;
    box-shadow: none;
  }
  @media ${device.lap1024} {
    padding: 1rem 3rem;
  }
  @media ${device.lap1440} {
    padding: 1rem 7rem;
  }
  @media ${device.lap1600} {
    max-width: 90rem;
	padding: 1rem 7rem;
  }
`;

export const NumberItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const NumberText = styled.div`
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 1.8rem;
  }
`;

export const CaptionText = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.4rem;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
`;

export const TheNumberWrap = styled.div`
  @media ${device.mobileS} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 100%;
    margin-top: 0.5rem;
  }
  @media ${device.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 0;
    margin-top: 0.5rem;
  }
`;
