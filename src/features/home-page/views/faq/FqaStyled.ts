import { colors } from "config/constants";
import { device } from "config/screensSizes";
import styled from "styled-components";

export const FaqContainer = styled.div`
  background-color: ${colors.primary};
`;

export const FaqTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1% 5% 1rem;
  @media ${device.mobileS} {
    padding: 3% 5% 1rem;
  }
  @media ${device.tablet768} {
    padding: 1% 5% 1rem;
  }
`;

export const FaqIconContainer = styled.div``;

export const FaqTitle = styled.h1`
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
  }
  @media ${device.lap1024} {
    font-size: 1.4rem;
    gap: 0.8rem;
  }
  @media ${device.lap1280} {
    font-size: 1.5rem;
  }
  @media ${device.lap1440} {
    font-size: 1.8rem;
  }
  @media ${device.lap1920} {
    font-size: 2.5rem;
  }
`;

export const HaveQuestionText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.tablet768} {
    font-size: 1rem;
  }
`;
