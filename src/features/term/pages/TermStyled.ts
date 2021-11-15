import { colors } from "./../../../config/constants";
import styled, { keyframes } from "styled-components";
import { device } from "../../../config/screensSizes";

export const TermContainer = styled.div``;

export const BodyContainer = styled.div`
  padding: 0 0.5rem;
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

export const Path = styled.div`
  color: ${colors.darkGrey};
  font-weight: bold;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  & span {
    color: ${colors.primary};
  }
  @media ${device.lap1024} {
    font-size: 0.9rem;
  }
`;

export const HeaderTitle = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem 0;
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }
`;

export const TermDescription = styled.div`
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  @media ${device.lap1024} {
    font-size: 0.8rem;
  }
`;

export const TermOfUse = styled.div``;

export const GeneralTerm = styled.div`
	margin-top: 2rem;
`;

export const GeneralHeaderTitle = styled(HeaderTitle)`
	color: ${colors.darkGrey}
`;


