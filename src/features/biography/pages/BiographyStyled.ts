import { colors } from "./../../../config/constants";
import styled from "styled-components";
import { device } from "../../../config/screensSizes";

export const BiographyContainer = styled.div`
  border-top: 1px solid ${colors.lightGrey};
`;

export const Title = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  padding: 1rem 0.5rem;
  font-size: 1.2rem;
  -webkit-text-stroke-width: 0.1px;
  letter-spacing: 0.5px;
  text-align: center;
  @media ${device.tablet768} {
    padding: 1.5rem;
    text-align: left;
  }
  @media ${device.tablet960} {
	max-width: 80rem;
  }
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }
  @media ${device.lap1440} {
    margin: 0 auto;
    padding-left: 0;
  }
  @media ${device.lap1600} {
	  max-width: 90rem;
  }
`;

export const InformationContainer = styled.div`
  background-color: ${colors.greyBackground};
  padding: 1rem 0.5rem;
  @media ${device.tablet768} {
    padding: 1.5rem;
    text-align: left;
  }
  @media ${device.tablet960} {
  }
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }
  @media ${device.lap1440} {
	  padding: 2rem 14rem;
  }
  @media ${device.lap1600} {
  }
`;

export const Name = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  -webkit-text-stroke-width: 0.1px;
  font-size: 0.6rem;
  margin-top: 0.5rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.lap1440} {
    font-size: 1rem;
  }
`;

export const Position = styled.div`
  @media ${device.mobileS} {
    font-size: 0.4rem;
  }
  @media ${device.tablet768} {
    font-size: 0.6rem;
  }
  @media ${device.lap1440} {
    font-size: 0.6rem;
  }
`;

export const DetailBio = styled.div`
  margin-top: 1rem;
  font-size: 0.5rem;
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
`;
