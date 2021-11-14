import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const FounderMediaContainer = styled.div`
  padding: 1rem 0.5rem;
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
    /* max-width: 90rem; */
    padding: 4rem 14rem;
    margin: 0 auto;
  }
`;

export const Description = styled.div`
  font-weight: bold;
  color: ${colors.black};
  & span {
    color: ${colors.primary};
  }
  @media ${device.mobileS} {
    text-align: center;
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    text-align: left;
    font-size: 0.9rem;
  }
  @media ${device.lap1024} {
    text-align: left;
    font-size: 1.1rem;
	-webkit-text-stroke-width: 0.1px;
  }
  @media ${device.lap1280} {
    text-align: left;
    font-size: 1.5rem;
  }
  
`;

export const Language = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & .ant-select-selection-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
  }
  margin: 1rem 0
`;

export const VideoContainer = styled.div`
  background-color: #c4c4c4;
  @media ${device.mobileS} {
    height: 10rem;
  }
  @media ${device.tablet768} {
    height: 15rem;
  }
  @media ${device.lap1024} {
    height: 20rem;
  }
  @media ${device.lap1024} {
    height: 25rem;
  }
  @media ${device.lap1440} {
    height: 30rem;
  }
`;

export const OurStoryContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.5rem;
  color: ${colors.primary};
  font-weight: bold;
  -webkit-text-stroke-width: 0.1px;
  & svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media ${device.lap1024} {
    font-size: 1.2rem;
    & svg {
      font-size: 2rem;
    }
  }
`;
