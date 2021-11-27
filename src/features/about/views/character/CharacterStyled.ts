import styled from "styled-components";
import { device } from "../../../../config/screensSizes";

export const CharacterContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet768} {
    padding: 1rem 2rem;
	margin-top: 1rem;
  }
  @media ${device.tablet960} {
    margin: 2rem auto;
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
    /* padding: 1rem 7rem; */
  }
`;

export const ItemContainer = styled.div`
  padding: 0.5rem;
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  @media ${device.mobileS} {
    font-size: 1.7rem;
  }
  @media ${device.lap1024} {
    font-size: 2rem;
  }
`;

export const CharacterTitle = styled.div`
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.lap1280} {
    font-size: 1rem;
  }
`;

export const CharacterContent = styled.div`
  @media ${device.mobileS} {
    font-size: 0.5rem;
  }
  @media ${device.lap1024} {
    font-size: 0.6rem;
  }
  @media ${device.lap1280} {
    font-size: 0.8rem;
  }
  @media ${device.lap1440} {
    font-size: 0.7rem;
	width: 80%;
  }
  @media ${device.lap1920} {
    font-size: 0.7rem;
	width: 75%;
  }
`;
