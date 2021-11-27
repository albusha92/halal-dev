import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const AboutHeaderContainer = styled.div`
  background-color: ${colors.secondary};
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  padding: 0.5rem;
  @media ${device.mobileS} {
    padding-left: 0.5rem;
  }
  @media ${device.mobileL} {
    padding-left: 0.5rem;
  }

  @media ${device.tablet768} {
    padding: 2rem;
    padding-top: 1.3rem;
  }
  @media ${device.tablet960} {
    padding: 4rem;
    padding-top: 3rem;
  }
  @media ${device.lap1024} {
    padding: 4rem;
    padding-top: 2.5rem;
  }
  @media ${device.lap1440} {
    padding: 4.5rem;
    padding-top: 4rem;
  }
  @media ${device.lap1920} {
    padding: 6rem;
    padding-top: 5rem;
  }
`;

export const Caption = styled.div`
  color: ${colors.white};
  font-weight: bold;
  display: inline-block;

  position: relative;
  &::after {
    content: "";
    width: 90%;
    position: absolute;
    bottom: 0px;
    left: 0;
    border-bottom: 1px solid white;
  }
  @media ${device.mobileS} {
    font-size: 0.7rem;
    -webkit-text-stroke-width: 0.1px;
    letter-spacing: 1px;
  }
  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.8rem;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 1.5px;
  }
  @media ${device.tablet960} {
    font-size: 2rem;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 1.5px;
  }
  @media ${device.lap1024} {
    font-size: 2.5rem;
  }
  @media ${device.lap1440} {
    font-size: 3rem;
  }
  @media ${device.lap1920} {
    font-size: 3.5rem;
  }
`;

export const SubCaption = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
  @media ${device.mobileL} {
    margin: 0.2rem 0;
    font-size: 1.1rem;
  }
  @media ${device.tablet768} {
    margin: 0.2rem 0;
    -webkit-text-stroke-width: 1px;
    letter-spacing: 1.5px;
    font-size: 1.9rem;
  }
  @media ${device.tablet960} {
    font-size: 2.3rem;
  }
  @media ${device.lap1024} {
    font-size: 2.5rem;
  }
  @media ${device.lap1440} {
    font-size: 3.5rem;
  }
  @media ${device.lap1920} {
    font-size: 4.5rem;
    margin: 2rem 0;
  }
`;

export const Detail = styled.div`
  color: white;
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.5rem;
    width: 65%;
  }
  @media ${device.mobileM} {
    font-size: 0.6rem;
    width: 65%;
  }
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media ${device.tablet960} {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  @media ${device.lap1024} {
    font-size: 1.6rem;
    width: 75%;
  }
  @media ${device.lap1440} {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  @media ${device.lap1920} {
    width: 65%;
    font-size: 2.7rem;
    line-height: 3.2rem;
  }
`;
