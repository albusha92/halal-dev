import styled from "styled-components";
import { device } from "../../../../config/screensSizes";

export const PressContainer = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #f7f7f7;
  flex-wrap: wrap;
  padding: 0.5rem;
  @media ${device.tablet768} {
  }
  @media ${device.tablet960} {
    margin: 2rem auto;
    padding: 1rem;
    box-sizing: border-box;
    flex-wrap: nowrap;
    min-height: unset;
    box-shadow: none;
  }
  @media ${device.lap1024} {
    margin: 1rem 3rem;
  }
  @media ${device.lap1440} {
    padding: 1rem 7rem;
  }
  @media ${device.lap1600} {
    max-width: 90rem;
    margin: 0 auto;
    /* padding: 1rem 7rem; */
  }
`;

export const CeoSpeechContainer = styled.div`
  font-weight: bold;
  @media ${device.mobileS} {
    margin: 0 1rem;
    font-size: 0.5rem;
  }
  @media ${device.tablet768} {
    margin: 0 4rem;
    font-size: 0.8rem;
  }
`;

export const PressBrandsContainer = styled.div`
  border: 1px solid #eeeeee;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: stretch;
  background-color: white;
`;

export const ImageContainer = styled.div`
  padding: 0.2rem;
  background-color: white;
  border-right: 1px solid #eeeeee;
  flex: 1;
  height: 100%;
  display: grid;
  place-items: center;
`;
