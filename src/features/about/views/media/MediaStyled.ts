import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  background-color: ${colors.secondary};

  /* margin-bottom: 1rem; */
  @media ${device.mobileS} {
    height: 10rem;
    padding-bottom: 0.5rem;
    gap: 0.5rem;
  }
  @media ${device.tablet768} {
    height: 13rem;
    padding-bottom: 0.5rem;
    gap: 1rem;
  }
  @media ${device.lap1024} {
    height: 18rem;
    padding-bottom: 1rem;
    gap: 2rem;
  }
  @media ${device.lap1280} {
    height: 22rem;
    padding-bottom: 1rem;
    gap: 2rem;
  }
  @media ${device.lap1440} {
    height: 27rem;
    padding-bottom: 1rem;
    gap: 4rem;
  }
  @media ${device.lap1600} {
    height: 35rem;
    padding-bottom: 3rem;
    gap: 7rem;
  }
`;

export const IconPlayContainer = styled.div`
  display: inline-flex;
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  @media ${device.tablet768} {
    font-size: 2rem;
  }
  @media ${device.lap1024} {
    font-size: 2.5rem;
  }
  @media ${device.lap1440} {
    font-size: 2.5rem;
  }
`;

export const Description = styled.div`
  font-weight: bold;
  text-align: center;
  color: white;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    width: 70%;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
	line-height: 1.2rem;
    width: 50%;
  }@media ${device.lap1024} {
    font-size: 1.2rem;
	line-height: 1.8rem;
    width: 40%;
  }
  @media ${device.lap1280} {
    font-size: 1.4rem;
	line-height: 1.8rem;
    width: 40%;
  }
  @media ${device.lap1440} {
    font-size: 1.5rem;
	line-height: 1.8rem;
    width: 40%;
  }
  @media ${device.lap1600} {
    font-size: 1.8rem;
	line-height: 2.2rem;
    width: 30%;
  }
`;

export const SeeMore = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.lap1280} {
    font-size: 1rem;
  }
`;
